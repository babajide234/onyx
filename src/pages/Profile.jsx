/* eslint-disable no-unused-vars */
/* eslint-disable no-empty-pattern */
import { Field, Form, Formik } from "formik";
import React, { useEffect } from "react";
import Input from "../components/formElements/Input";
import { useNavigate } from "react-router-dom";
import userStore from "../store/usserStore";
import Button from "../components/common/Buttons";
import { MdOutlinePhotoCamera } from "react-icons/md";
import { useQuery } from "react-query";
import { uploadinstance } from "../utils/service";
import LineCustomSelect from "../components/formElements/LineCustomSelect";
import { IdentifyOptions, SexOptions } from "../utils/util";

const Profile = () => {
  const isLoggedIn = userStore((state) => state.isLoggedIn);
  const details = userStore((state) => state.details);
  const editProfile = userStore((state) => state.editProfile);
  const [imagePreview, setImagePreview] = React.useState(
    details?.photo || null
  );
  // const profile = useQuery(["profile"], () => {
  //   return getProfile();
  // });

  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);
  useEffect(() => {
    console.log(details);
  }, [details]);

  const initialState = {
    firstName: details ? details.firstName : "",
    lastName: details ? details.lastName : "",
    email: details ? details.email : "",
    userName: details ? details.userName : "",
    identity: "",
    orientation: "",
    city: "",
  };

  const handleImageChange = (event) => {
    const file = event.currentTarget.files[0];
    setImagePreview(URL.createObjectURL(file));
  };

  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("File", file);
    formData.append("DocumentType", 4);

    const response = await uploadinstance.post("app/uploadPhoto", formData);

    const imageUrl = await response.data.fileName;
    return imageUrl;
  };

  const handleSubmit = async (values) => {
    const filename = getFileNameFromURL(event.image);
    const imageFile = values.image;
    let imageUrl = filename;

    if (imageFile && imageFile instanceof File) {
      imageUrl = await uploadImage(imageFile);
    }
    const data = {
      user: {
        firstName: values.firstName,
        lastName: values.lastName,
        otherNames: "",
        userName: values.userName,
        photo: imageUrl,
      },
      profile: {
        user: "",
        selfIdentity: values.identity,
        sexualOrientation: values.orientation,
        city: values.city,
        employmentStatus: "",
        employmentIndustry: "",
        employer: "",
        setGoal: "",
      },
    };

    editProfile(data);
  };

  const getFileNameFromURL = (url) => {
    try {
      const filename = url.substring(url.lastIndexOf("/") + 1);
      return filename;
    } catch (error) {
      console.error("Error extracting the filename:", error);
      return null;
    }
  };
  return (
    <div className=" min-h-screen  ">
      <div className=" w-[800px] py-56 mx-auto">
        <div className=" flex flex-col items-center text-center mb-10">
          <h2 className=" text-4xl font-bold mb-5">Edit Profile</h2>
        </div>
        <div className="">
          <Formik initialValues={initialState} onSubmit={handleSubmit}>
            {({ handleChange, setFieldValue, values, errors }) => (
              <Form>
                <div className=" flex flex-col gap-10">
                  <div className="flex flex-col items-center mb-10">
                    <div className=" relative w-[234px] h-[234px]  bg-slate-50 rounded-full">
                      {imagePreview && (
                        <img
                          src={imagePreview}
                          className="w-[234px] h-[234px] rounded-full"
                          alt="Image Preview"
                        />
                      )}
                      <label
                        htmlFor="image"
                        className="w-[53px] h-[53px] z-50 flex justify-center items-center cursor-pointer bg-primary rounded-full absolute bottom-0 right-5">
                        <MdOutlinePhotoCamera className="text-white text-3xl" />
                        <input
                          type="file"
                          id="image"
                          name="image"
                          onChange={(career) => {
                            handleImageChange(career);
                            setFieldValue(
                              "image",
                              career.currentTarget.files[0]
                            );
                          }}
                          className="hidden"
                        />
                      </label>
                    </div>
                  </div>
                  <div className=" grid gap-10 grid-cols-2">
                    <div className="flex flex-col gap-3">
                      <label htmlFor="" className=" font-semibold">
                        First Name
                      </label>
                      <Field as={Input} id="" name="firstName" />
                    </div>
                    <div className="flex flex-col gap-3">
                      <label htmlFor="" className=" font-semibold">
                        Last Name
                      </label>
                      <Field as={Input} id="" name="lastName" />
                    </div>
                  </div>
                  <div className=" grid gap-10 grid-cols-1">
                    <div className="flex flex-col gap-3">
                      <label htmlFor="" className=" font-semibold">
                        Email
                      </label>
                      <Field as={Input} id="" name="email" disabled={true} />
                    </div>
                  </div>
                  <div className=" grid gap-10 grid-cols-1">
                    <div className="flex flex-col gap-3">
                      <label htmlFor="" className=" font-semibold">
                        Username
                      </label>
                      <Field as={Input} id="" name="userName" disabled={true} />
                    </div>
                  </div>
                  <div className=" grid gap-10 grid-cols-1">
                    <div className="flex flex-col gap-3">
                      <label htmlFor="" className=" font-semibold">
                        How do you identify yourself?
                      </label>
                      <Field name="identity">
                        {({ field }) => (
                          <LineCustomSelect
                            name={field.name}
                            options={IdentifyOptions}
                            placeholder="How do you identify yourself?"
                            error={errors.selfIdentity}
                            onChange={handleChange}
                            value={values.selfIdentity}
                          />
                        )}
                      </Field>
                    </div>
                  </div>
                  <div className=" grid gap-10 grid-cols-1">
                    <div className="flex flex-col gap-3">
                      <label htmlFor="" className=" font-semibold">
                        What is your sexual orientation?
                      </label>
                      <Field name="orientation">
                        {({ field }) => (
                          <LineCustomSelect
                            name={field.name}
                            options={SexOptions}
                            placeholder="What is your sexual orientation?"
                            error={errors.orientation}
                            onChange={handleChange}
                            value={values.orientation}
                          />
                        )}
                      </Field>
                    </div>
                  </div>
                  <div className=" grid gap-10 grid-cols-1">
                    <div className="flex flex-col gap-3">
                      <label htmlFor="" className=" font-semibold">
                        City
                      </label>
                      <Field as={Input} id="" name="city" />
                    </div>
                  </div>
                  <div className="flex justify-center gap-10">
                    <Button varient="outlined" color="primary" size="medium">
                      Cancel
                    </Button>
                    <Button varient="contained" color="primary" size="medium">
                      Save
                    </Button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Profile;
