import { useContext, useRef, useState } from 'react'
import { CgClose } from 'react-icons/cg'
import { UserContext } from '../context/userContext'
import { useNavigate } from 'react-router-dom'

export const SignInModal = () => {
    const {modalState, toggleModals, signIn} = useContext(UserContext)

    const navigate = useNavigate();

    const [validation, setValidation] = useState("");

    const inputs = useRef([])
    const addInputs = el => {
        if(el && !inputs.current.includes(el)){
            inputs.current.push(el)
        }
    }
    const formRef = useRef();

    const handleForm = async(e) => {
        e.preventDefault()

        try {
            const cred = await signIn(
                inputs.current[0].value,
                inputs.current[1].value
            )
            formRef.current.reset();
            setValidation("")
            toggleModals("close")
            navigate("/private/private-home");
            
        } catch {
            setValidation("Adresse mail ou mot de passe incorrect.")
        }
    }

    const closeModal = () => {
        setValidation("")
        toggleModals("close")
    }

    return (
        <section>
            {modalState.signInModal && (
            <div className=" fixed  top-0 w-screen h-screen">
                <div onClick={closeModal} className="w-full h-full bg-black/75 ">
                    <div className="absolute top-1/2 left-1/2 translate-x-2/4 translate-y-2/4 min-w-400">
                        <div className="flex flex-row justify-between items-center">
                            <h5 className="text-2xl">Connexion</h5>
                            <button onClick={closeModal}><CgClose className='m-2 items-center'/></button>
                        </div>
                        <div>
                            <form ref={formRef} onSubmit={handleForm}>
                                <div className='mb-3'>
                                    <label htmlFor="signInEmail">Adresse mail</label>
                                    <input ref={addInputs} name='email' required type="email" id='signInEmail'/>
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor="signInPwd">Entrez le mot de passe</label>
                                    <input ref={addInputs} name='pwd' required type="password" id='signInPwd'/>
                                </div>
                                <button>Valider</button>
                            </form>
                        </div>
                    </div>
                </div>
                
            </div>
            )}
        </section>
    )
}