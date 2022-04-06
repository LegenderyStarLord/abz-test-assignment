import React, {useEffect, useState} from "react";
import "./Registration.scss";
import footPrint from "../../assets/Footprint-972x177.svg";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Modal from "../Modal/Modal";



const schema = yup.object().shape({
    picture: yup
        .mixed()
        .test("required", "you need to provide a file", (value) => {
            return value && value.length;
        })
        .test("fileSize", "The file is too large", (value, context) => {
            return value && value[0] && value[0].size <= 500000;
        })
        .test("type", "We only support jpeg", function (value) {
            return value && value[0] && value[0].type === "image/jpeg";
        }),
    name: yup
        .string()
        .min(2, "must be 2 characters long minimum")
        .max(60, "must be 60 characters long maximum")
        .required("Name is a required field"),
    email: yup
        .string()
        .email()
        .matches(
            /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i,
            "email must be a valid email"
        )
        .required("email is required"),
    phone: yup
        .string()
        .matches(/^\+380\d{3}\d{2}\d{2}\d{2}$/, "start with +380 without () and gaps")
        .required("Phone is a required field"),
    position: yup.string().required("position is required!")
});



function Registration(props) {
    const [fileInput, setFileInput] = useState("");
    const [modalActive, setModalActive] = useState(false);


    const { register, handleSubmit, watch, reset, formState: { errors, isValid, isDirty }} = useForm({
        mode: "onChange",
        resolver: yupResolver(schema)});

    useEffect(() => {
        if(props.isRegistered) {
            setModalActive(true);
                reset({
                    name: '',
                    email: '',
                    phone: '',
                    position: '',
                    picture: "undefined"
                });
            window.scrollTo({ top: 1300, behavior: "smooth" });
        }
    }, [props.isRegistered])


    useEffect(() => {
        const getInputValue = watch((value) => {
          let inputValue = value?.picture[0]?.name;
            setFileInput(inputValue);
        })
    }, [watch]);

    const onSubmit = async (formData) => {
            props.registerNewUser(formData);
    }


    return (
        <div className={"registration-wrapper"}>
        <div id={"registration-form"} className={"registration-main-block"}>
            <h2>Register to get a work</h2>
            <h3>Your personal data is stored according to the Privacy Policy</h3>
            <div className={"registration-sub-block"}>
                <form  onSubmit={handleSubmit(onSubmit)}>
                    <div className={"main-input-block"}>
                        <input
                            className={errors?.name? "main-input-error" : "main-input"}
                            placeholder={" "}
                            id="name"
                            type="text"
                            {...register("name")}
                            autoComplete={"off"}
                        />
                        <label className="main-input-label" htmlFor="name">Your name</label>
                        {errors?.name && <p className={"helper-text"}>{errors?.name.message}</p>}
                    </div>
                    <div className={"main-input-block"}>
                        <input
                            className={errors?.email? "main-input-error" : "main-input"}
                            placeholder={" "}
                            id="email"
                            type="text"
                            {...register("email")}
                            autoComplete={"off"}
                        />
                        <label className="main-input-label" htmlFor="email">Email</label>
                        {errors?.email && <p className={"helper-text"}>{errors?.email.message}</p>}
                    </div>
                    <div className={"main-input-block last-block"}>
                        <input
                            className={errors?.phone? "main-input-error" : "main-input"}
                            placeholder={" "}
                            id="phone"
                            type="tel"
                            {...register("phone")}
                            autoComplete={"off"}
                        />
                        <label className="main-input-label" htmlFor="phone">Phone</label>
                        {errors?.phone && <p className={"helper-text"}>{errors?.phone.message}</p>}
                    </div>
                    <div className={"select-block"}>
                        <p>Select your position</p>
                        {props.positions?.map((position) => {
                            return (
                                <label key={position.id} className="radio-btn-container">{position.name}
                                    <input
                                        id="position"
                                        value={position.id}
                                        {...register("position")}
                                        name="position"
                                        type="radio"
                                    />
                                    <span className={ errors?.position? "checkmarkError" : "checkmark"}/>
                                </label>
                            )
                        })}
                    </div>
                    <div className={"upload-btn-block"}>
                        <input
                            id={"picture"}
                            {...register("picture")}
                            className={"upload-input"}
                            type={"file"}
                        />
                        <label
                            htmlFor={"picture"}
                            className={errors?.picture? "buttonFileUploadError" : "upload-btn"} >
                            Upload
                        </label>
                        <label
                            className={errors?.picture? "inputFileUploadError" : "upload-label"}>
                            {fileInput ? fileInput : "Upload your photo"}
                        </label>
                        {errors?.picture && <p className={"helper-text"}>{errors?.picture.message}</p>}
                    </div>
                    <button className={"signup-form-btn"}  disabled={!isDirty || !isValid}>Sign up</button>
                </form>
                <Modal active={modalActive} setActive={setModalActive} />

            </div>
        </div>
            <div className={"footprint-container"}>
                <img src={footPrint} alt={"footPrint"}/>
            </div>
        </div>
    );
}

export default Registration;