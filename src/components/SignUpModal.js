import { useContext, useRef, useState } from 'react'
import { CgClose } from 'react-icons/cg'
import { UserContext } from '../context/userContext'

export const SignUpModal = () => {
    const {modalState, toggleModals} = useContext(UserContext)

    const [validation, setValidation] = useState("");

    const inputs = useRef([])
    const addInputs = el => {
        if(el && !inputs.current.includes(el)){
            inputs.current.push(el)
        }
    }

    const handleForm = e => {
        e.preventDefault()

        if((inputs.current[1].value.length || inputs.current[2].value.length) < 6) {
            setValidation("6 caractères minimum");
            return;
        }
        else if(inputs.current[1].value !== inputs.current[2].value) {
            setValidation("Les mots ne correspondent pas")
        }

    }

    return (
        <section>
            {modalState.signUpModal && (
            <div className=" fixed  top-0 w-screen h-screen">
                <div className="bg-white shadow-lg rounded-lg">
                    <div onClick={() => toggleModals("close")} className="w-full h-full bg-black/75 ">
                        <div className="absolute top-1/2 left-1/2 translate-x-2/4 translate-y-2/4 min-w-400">
                            <div className="flex flex-row justify-between items-center">
                                <h5 className="text-2xl">Connexion</h5>
                                <button onClick={() => toggleModals("close")}><CgClose className='m-2 items-center'/></button>
                            </div>
                            <div>
                                <form onSubmit={handleForm}>
                                    <div className='mb-3'>
                                        <label htmlFor="signUpPwd">Adresse mail</label>
                                        <input ref={addInputs} name='email' required type="email" id='signUpEmail'/>
                                    </div>
                                    <div className='mb-3'>
                                        <label htmlFor="signUpEmail">Entrez le mot de passe</label>
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
            </div>
            )}
        </section>
    )
}