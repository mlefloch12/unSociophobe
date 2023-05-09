import { useContext, useRef, useState } from 'react'
import { CgClose } from 'react-icons/cg'
import { UserContext } from '../context/userContext'
import { useNavigate } from 'react-router-dom'

export const SignUpModal = () => {
    const {modalState, toggleModals, signUp} = useContext(UserContext)

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

        if((inputs.current[1].value.length || inputs.current[2].value.length) < 6) {
            setValidation("6 caractères minimum");
            return;
        }
        else if(inputs.current[1].value !== inputs.current[2].value) {
            setValidation("Les mots ne correspondent pas")
        }

        try {
            const cred = await signUp(
                inputs.current[0].value,
                inputs.current[1].value
            )
            formRef.current.reset();
            setValidation("")
            toggleModals("close")
            navigate("/private/private-home");
            
        } catch (err) {
            if(err.code === "auth/invalid-email") {
                setValidation("Format de l'adresse mail invalide")
            }

            else if(err.code === "auth/email-already-in-use") {
                setValidation("Cette adresse mail est déjà utilisée")
            }
        }
    }

    const closeModal = () => {
        setValidation("")
        toggleModals("close")
    }

    return (
        <section>
            {modalState.signUpModal && (
            <div className=" fixed  top-0 w-screen h-screen">
                <div onClick={closeModal} className="w-full h-full bg-black/75 ">
                    <div className="absolute top-1/2 left-1/2 translate-x-2/4 translate-y-2/4 min-w-400">
                        <div className="flex flex-row justify-between items-center">
                            <h5 className="text-2xl">Inscription</h5>
                            <button onClick={closeModal}><CgClose className='m-2 items-center'/></button>
                        </div>
                        <div>
                            <form ref={formRef} onSubmit={handleForm}>
                                <div className='mb-3'>
                                    <label htmlFor="signUpEmail">Adresse mail</label>
                                    <input ref={addInputs} name='email' required type="email" id='signUpEmail'/>
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor="signUpPwd">Entrez le mot de passe</label>
                                    <input ref={addInputs} name='pwd' required type="password" id='signUpPwd'/>
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor="repeatPWD">Répétez le mot de passe</label>
                                    <input ref={addInputs} name='pwd' required type="password" id='repeatPWD'/>
                                    <p>{validation}</p>
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