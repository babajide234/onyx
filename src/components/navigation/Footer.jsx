import Container from "../common/Container"

const Footer = () => {
  return (
    <div className=" w-full h-28 bg-black">
        <Container>
            <div className="flex w-full h-full items-center justify-center">
                <p className=" text-white">© 2023 OnyxTruth. All rights reserved. Terms and Conditions</p>
                <div className=""></div>
            </div>
        </Container>
    </div>
  )
}

export default Footer