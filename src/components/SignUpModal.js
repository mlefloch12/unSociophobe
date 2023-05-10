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
            <div className='h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50'>
                <div className="bg-white rounded shadow-lg w-1/5">
                    <div onClick={closeModal} className="w-full h-full bg-black/75"></div>
                        <div className="border-b px-4 py-2">
                        <div className="flex flex-row justify-between">
                            <h5 className="text-2xl">Inscription</h5>
                            <button onClick={closeModal}><CgClose className='m-2 items-center'/></button>
                        </div>
                        <div className="p-3">
                            <form className="bg-white flex flex-col max-w-xs p-4" ref={formRef} onSubmit={handleForm}>
                                <div className="flex flex-col py-2">
                                    <label htmlFor="signUpEmail">Adresse mail</label>
                                    <input ref={addInputs} name='email' required type="email" id='signUpEmail' className="border-2"/>
                                </div>
                                <div className="flex flex-col py-2">
                                    <label htmlFor="signUpPwd">Entrez le mot de passe</label>
                                    <input ref={addInputs} name='pwd' required type="password" id='signUpPwd' className="border-2"/>
                                </div>
                                <div className="flex flex-col py-2">
                                    <label htmlFor="repeatPWD">Répétez le mot de passe</label>
                                    <input ref={addInputs} name='pwd' required type="password" id='repeatPWD' className="border-2"/>
                                    <p>{validation}</p>
                                </div>
                                <button className="bg-white border-black border-2 rounded hover:bg-black hover:text-white">Valider</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            )}
        </section>
    )
}