import { Link } from "react-router-dom"
import Container from "../components/common/Container"
import { FaArrowLeft } from "react-icons/fa"
import IMG from '../assets/singleEvent.png'
import { FeedsCard } from "../components/common/Cards"


const SinglePost = () => {
  return (
    <Container>
        <div className=" pt-[105px] pb-[87px] ">
            <div className=" flex w-full justify-start mb-7 ">
                <Link to="/event" className=" text-text flex items-center text-[32px] font-bold hover:text-primary"> <FaArrowLeft className=" mr-3"/>Return</Link>
            </div>
            <div className=" w-full pb-7">
                <img src={IMG} alt="" className=" w-full" />
            </div>

            <div className=" w-full pb-16">
                <h3 className=" text-text text-[2rem] mb-[7px] font-bold">Blog title</h3>
                <div className=" flex flex-col mb-[30px]">
                    <h3 className="text-text text-base mb-[7px]">
                        <span className=" font-bold">Author: </span>
                        Dasola
                    </h3>
                    <h3 className=" text-text text-base">
                        <span className=" font-bold">Date: </span>
                        24th Feb, 2023
                    </h3>
                </div>
                <p className=" text-text text-base mb-[23px]">
                Lorem ipsum dolor sit amet consectetur. Porta velit odio fusce lectus diam ornare. Leo cursus ultrices est nibh elementum amet. Nisi integer aliquet varius cras egestas augue dictum. Viverra enim dictumst praesent pellentesque ultricies imperdiet volutpat pulvinar risus. Netus turpis cras arcu vulputate sagittis blandit tortor. Pellentesque sed sit ut erat lorem iaculis phasellus sed pharetra. Bibendum aliquam amet ut donec bibendum sit ut ornare dui. Mattis metus ipsum imperdiet in dictum eu aliquet tincidunt. Adipiscing at egestas cras est odio.
Ut dolor feugiat auctor nisl. Auctor tellus nunc nulla eu. Dictum eget commodo ultrices amet non aliquam sit. Dui arcu at egestas sapien duis erat morbi molestie mattis. Dolor nibh lectus quis sit. Ut sit sit vitae diam faucibus donec eget. Varius eget tristique quis sapien massa dolor leo venenatis. Interdum sed nunc magna interdum.
Massa nulla ullamcorper tortor sit. Ridiculus nisl tortor sagittis odio nam aliquet consequat. Ut eu diam amet adipiscing a pellentesque. Egestas a vitae augue massa. Vitae elit at porttitor sit sit consectetur lorem sed. Blandit pellentesque fermentum donec diam ornare pellentesque tincidunt. Habitasse diam aliquet donec lectus tincidunt viverra arcu. Egestas mauris lacinia ornare gravida. Magna lobortis vivamus dignissim pharetra. Semper adipiscing suspendisse in tincidunt odio. Tellus at donec gravida maecenas venenatis ipsum rhoncus aliquam. Amet eu cras velit quis in elementum nunc. Quis ut senectus neque massa ultricies viverra arcu. Nunc neque enim ut egestas gravida. Id volutpat nisl nibh in.
Nec justo luctus metus pellentesque lectus pellentesque nisi massa. Viverra sodales faucibus lectus cras cursus hendrerit ut nisi. Id molestie mauris sed tellus diam. Mattis quam proin lectus mollis. Nisi amet quisque vestibulum sed. In neque facilisis amet ultricies nisi commodo nunc. Fames nec scelerisque nisi id sagittis aenean facilisis volutpat tempor. Nibh morbi phasellus nec placerat eget tincidunt a morbi nec. Eu sed est quam magna in sit. Pellentesque et sed eu porttitor egestas cras dolor lorem blandit. Elit risus eu facilisis morbi ac gravida.
Tellus amet platea pharetra quis arcu facilisis ante tortor mauris. Felis eget etiam lorem duis dis. Consequat nunc aenean nunc blandit condimentum. Vitae tristique molestie purus nullam risus cursus eleifend. Quis pellentesque non ultrices leo tristique in in viverra. Mattis interdum non ultrices gravida. Volutpat ipsum sit et et egestas tincidunt tellus. Feugiat purus egestas velit leo. Amet ut in volutpat aliquet adipiscing eu vitae praesent et. Dignissim magna fusce tortor aliquet blandit. Tellus senectus nec vitae nulla. Ornare mattis sed lectus condimentum.
                </p>
            </div>

            <div className=" flex w-full justify-start pb-[56px] ">
                    <h2 className=" text-text flex items-center text-[32px] font-bold">More events</h2>
                </div>
                <div className="grid grid-cols-3 gap-9">
                    <FeedsCard/>
                    <FeedsCard/>
                    <FeedsCard/>
                </div>
        </div>
    </Container>
  )
}

export default SinglePost