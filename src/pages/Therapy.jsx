import Header from "../components/pages/therapy/Header"
import Services from "../components/pages/therapy/Services"
import SuccessPage from "../components/pages/therapy/SuccessPage";
import contactStore from "../store/contactStore"

const Therapy = () => {

  const success = contactStore((state)=> state.success);

  return (
    <>
      {
        success ? (
          <SuccessPage/>
        ) : (
          <>
            <Header/>
            <Services/>
          </>
        )
      }

    </>
  )
}

export default Therapy