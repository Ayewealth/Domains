import { Button, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";

const BuyDomain = ({ onAddData, handleClose }) => {
    const [age, setAge] = useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const { register, handleSubmit, formState: { errors }, } = useForm()

    const generateRandomPrice = () => {
        return Math.floor(Math.random() * 100);
    };

    const onSubmit = () => {
        const randomPrice = generateRandomPrice();
        onAddData({ domainPrice: randomPrice });
    };
    return (
        <div className='buy__domain'>
            <div className='buyd__form'>
                <div className='buyd__form-head'>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="29" viewBox="0 0 36 29" fill="none">
                            <g clip-path="url(#clip0_2_896)">
                                <path d="M18.5657 28.1699C25.9943 28.1699 32.0163 22.1258 32.0163 14.6699C32.0163 7.21408 25.9943 1.16992 18.5657 1.16992C11.1372 1.16992 5.11523 7.21408 5.11523 14.6699C5.11523 22.1258 11.1372 28.1699 18.5657 28.1699Z" fill="#63BF64" fill-opacity="0.26" />
                                <path d="M9.21094 24.3649C11.7183 26.8053 15.0737 28.17 18.5663 28.17C22.059 28.17 25.4144 26.8053 27.9217 24.3649C25.5612 22.8825 22.2436 21.9572 18.5663 21.9572C14.889 21.9572 11.5715 22.8825 9.21094 24.3649ZM9.21094 4.975C11.5715 6.45747 14.889 7.38278 18.5663 7.38278C22.2436 7.38278 25.5612 6.45747 27.9217 4.975C25.4144 2.53466 22.059 1.16992 18.5663 1.16992C15.0737 1.16992 11.7183 2.53466 9.21094 4.975Z" fill="#47AE76" fill-opacity="0.44" />
                                <path d="M18.5658 28.1699C21.2034 28.1699 23.3416 22.1258 23.3416 14.6699C23.3416 7.21408 21.2034 1.16992 18.5658 1.16992C15.9282 1.16992 13.79 7.21408 13.79 14.6699C13.79 22.1258 15.9282 28.1699 18.5658 28.1699Z" fill="#A4E1CF" />
                                <path d="M14.6329 7.01548C15.9295 7.26201 17.2464 7.38499 18.5661 7.3828C19.8857 7.38499 21.2026 7.26201 22.4992 7.01548C21.6378 3.48523 20.1981 1.16998 18.5661 1.16998C16.9341 1.16998 15.494 3.48523 14.6329 7.01548ZM22.4992 22.3245C19.8998 21.8347 17.2323 21.8347 14.6329 22.3245C15.494 25.8547 16.9341 28.17 18.5661 28.17C20.1981 28.17 21.6378 25.8547 22.4992 22.3245Z" fill="#7DAF8F" />
                                <path d="M1.75293 10.7793H35.3792V18.5595H1.75293V10.7793Z" fill="#63BF64" />
                                <path d="M1.75293 10.7793H35.3792V18.5595H1.75293V10.7793Z" fill="url(#paint0_linear_2_896)" />
                                <path d="M26.585 10.7793H35.3796V18.5595H26.585V10.7793Z" fill="#55B76E" />
                                <path d="M8.88577 16.85C8.78733 16.8499 8.69118 16.8201 8.60983 16.7645C8.52847 16.7089 8.46567 16.63 8.42957 16.5381L7.56314 14.3272L6.69698 16.5381C6.6592 16.6343 6.59221 16.7161 6.50551 16.772C6.4188 16.8278 6.31678 16.8549 6.21391 16.8492C6.11103 16.8436 6.01252 16.8057 5.93235 16.7407C5.85217 16.6758 5.7944 16.5872 5.76721 16.4874L4.84837 13.1124C4.81411 12.9865 4.8311 12.852 4.89561 12.7387C4.96012 12.6253 5.06686 12.5423 5.19234 12.5079C5.31783 12.4735 5.45179 12.4906 5.56475 12.5553C5.6777 12.6201 5.76041 12.7272 5.79467 12.8531L6.32429 14.7991L7.10666 12.8022C7.14278 12.7103 7.20563 12.6313 7.28704 12.5757C7.36845 12.5201 7.46465 12.4904 7.56314 12.4904C7.66162 12.4904 7.75782 12.5201 7.83923 12.5757C7.92064 12.6313 7.9835 12.7103 8.01961 12.8022L8.80198 14.7991L9.33188 12.8531C9.36614 12.7272 9.44885 12.6201 9.56181 12.5553C9.67476 12.4906 9.80872 12.4735 9.93421 12.5079C10.0597 12.5423 10.1664 12.6253 10.2309 12.7387C10.2954 12.852 10.3124 12.9865 10.2782 13.1124L9.35934 16.4874C9.33215 16.5872 9.27438 16.6758 9.19421 16.7408C9.11405 16.8058 9.01555 16.8438 8.91267 16.8494L8.88577 16.85ZM15.4917 16.85C15.3933 16.8499 15.2972 16.8201 15.2159 16.7644C15.1346 16.7088 15.0718 16.6299 15.0357 16.5381L14.1693 14.3272L13.3029 16.5381C13.2644 16.6338 13.1973 16.7152 13.1108 16.771C13.0242 16.8268 12.9225 16.8542 12.8198 16.8494C12.717 16.8436 12.6186 16.8056 12.5386 16.7406C12.4585 16.6757 12.4008 16.5871 12.3737 16.4874L11.4548 13.1124C11.4206 12.9864 11.4376 12.8519 11.5021 12.7385C11.5667 12.625 11.6735 12.542 11.7991 12.5076C11.9246 12.4732 12.0587 12.4903 12.1717 12.5551C12.2847 12.6199 12.3674 12.7271 12.4017 12.8531L12.9316 14.7991L13.7139 12.8022C13.75 12.7102 13.8128 12.6313 13.8942 12.5756C13.9756 12.52 14.0718 12.4902 14.1703 12.4902C14.2688 12.4902 14.365 12.52 14.4464 12.5756C14.5277 12.6313 14.5906 12.7102 14.6266 12.8022L15.409 14.7991L15.9389 12.8531C15.9731 12.7272 16.0559 12.6201 16.1688 12.5553C16.2818 12.4906 16.4157 12.4735 16.5412 12.5079C16.6667 12.5423 16.7734 12.6253 16.8379 12.7387C16.9025 12.852 16.9194 12.9865 16.8852 13.1124L15.9663 16.4874C15.9392 16.5872 15.8814 16.6759 15.8013 16.7408C15.7211 16.8058 15.6226 16.8438 15.5197 16.8494L15.4917 16.85ZM22.0973 16.85C21.9988 16.85 21.9026 16.8202 21.8213 16.7646C21.7399 16.7089 21.6771 16.63 21.6411 16.5381L20.7752 14.3272L19.9087 16.5381C19.8701 16.6337 19.8029 16.715 19.7164 16.7707C19.6299 16.8265 19.5284 16.854 19.4256 16.8494C19.3228 16.8438 19.2243 16.8058 19.1442 16.7408C19.0641 16.6758 19.0064 16.5872 18.9793 16.4874L18.0601 13.1124C18.0259 12.9865 18.0429 12.852 18.1074 12.7387C18.1719 12.6253 18.2786 12.5423 18.4041 12.5079C18.5296 12.4735 18.6636 12.4906 18.7765 12.5553C18.8895 12.6201 18.9722 12.7272 19.0064 12.8531L19.5363 14.7991L20.3187 12.8022C20.3548 12.7103 20.4177 12.6313 20.4991 12.5757C20.5805 12.5201 20.6767 12.4904 20.7752 12.4904C20.8737 12.4904 20.9699 12.5201 21.0513 12.5757C21.1327 12.6313 21.1955 12.7103 21.2317 12.8022L22.014 14.7991L22.5436 12.8531C22.5779 12.7272 22.6606 12.6201 22.7736 12.5553C22.8865 12.4906 23.0205 12.4735 23.146 12.5079C23.2715 12.5423 23.3782 12.6253 23.4427 12.7387C23.5072 12.852 23.5242 12.9865 23.4899 13.1124L22.5711 16.4874C22.544 16.5871 22.4864 16.6756 22.4064 16.7406C22.3264 16.8056 22.228 16.8436 22.1253 16.8494L22.0973 16.85Z" fill="#E1F7FF" />
                                <path d="M33.4175 16.4566L32.2198 15.2546C32.4806 14.8226 32.5748 14.3097 32.4845 13.8128C32.3942 13.3159 32.1257 12.8694 31.7298 12.5577C31.3338 12.2459 30.8378 12.0906 30.3354 12.1209C29.8331 12.1513 29.3592 12.3652 29.0034 12.7224C28.6475 13.0796 28.4344 13.5552 28.4041 14.0594C28.3739 14.5635 28.5287 15.0614 28.8393 15.4588C29.1498 15.8562 29.5947 16.1257 30.0898 16.2164C30.5849 16.307 31.0959 16.2125 31.5263 15.9506L32.7239 17.1527C32.8159 17.245 32.9406 17.2969 33.0707 17.2969C33.2007 17.2969 33.3255 17.245 33.4175 17.1527C33.5094 17.0604 33.5611 16.9352 33.5611 16.8047C33.5611 16.6741 33.5094 16.5489 33.4175 16.4566ZM29.3958 14.1909C29.3958 13.9783 29.4585 13.7705 29.5762 13.5938C29.6939 13.4171 29.8611 13.2794 30.0567 13.198C30.2524 13.1167 30.4677 13.0954 30.6754 13.1369C30.8831 13.1783 31.0738 13.2807 31.2236 13.431C31.3733 13.5813 31.4753 13.7727 31.5166 13.9812C31.5579 14.1897 31.5367 14.4058 31.4557 14.6021C31.3746 14.7985 31.2374 14.9663 31.0613 15.0844C30.8852 15.2025 30.6782 15.2655 30.4665 15.2655C30.1826 15.2652 29.9105 15.1518 29.7098 14.9504C29.509 14.7489 29.3961 14.4758 29.3958 14.1909Z" fill="white" />
                            </g>
                            <defs>
                                <linearGradient id="paint0_linear_2_896" x1="7.06478" y1="10.7793" x2="7.74823" y2="19.4156" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#0284A1" />
                                    <stop offset="1" stop-color="#63BF64" />
                                </linearGradient>
                                <clipPath id="clip0_2_896">
                                    <rect width="35" height="28" fill="white" transform="translate(0.891602 0.681641)" />
                                </clipPath>
                            </defs>
                        </svg>
                        <h2>Buy Domain</h2>
                    </div>
                    <p>This information is required in order to reach you in case of problems with your registration</p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='input__wrapper'>
                        <div className='input__wrap'>
                            <label>First Name</label>
                            <input
                                type="text"
                                placeholder='Enter First Name'
                                {...register("firstName", { required: 'This is required' })}
                            />
                            <p>{errors.firstName?.message}</p>
                        </div>
                        <div className='input__wrap'>
                            <label>Last Name</label>
                            <input
                                type="text"
                                placeholder='Enter Last Name'
                                {...register("lastName", { required: 'This is required' })}
                            />
                            <p>{errors.lastName?.message}</p>
                        </div>
                        <div className='input__wrap'>
                            <label>Company Name</label>
                            <input
                                type="text"
                                placeholder='Enter Company Name'
                                {...register("companyName", { required: 'This is required' })}
                            />
                            <p>{errors.companyName?.message}</p>
                        </div>
                        <div className='input__wrap'>
                            <label>Email</label>
                            <input
                                type="email"
                                placeholder='Enter Email'
                                {...register("email", {
                                    required: 'This is required', pattern: {
                                        value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i,
                                        message: 'Invaild Email Pattern'
                                    }
                                })}
                            />
                            <p>{errors.email?.message}</p>
                        </div>
                    </div>
                    <div className="input__wrapp">
                        <label>Address Line 1</label>
                        <input
                            type="text"
                            placeholder="Enter Address Line 1"
                            {...register("addressLine1", { required: 'This is required' })}
                        />
                        <p>{errors.addressLine1?.message}</p>
                    </div>
                    <div className="input__wrapp">
                        <label>Address Line 2</label>
                        <input
                            type="text"
                            placeholder="Enter Address Line 2"
                        />
                    </div>
                    <div className='input__wrapper'>
                        <div className='input__wrap'>
                            <label>City</label>
                            <input
                                type="text"
                                placeholder='Enter City'
                                {...register("city", { required: 'This is required' })}
                            />
                            <p>{errors.city?.message}</p>
                        </div>
                        <div className='input__wrap'>
                            <label>State</label>
                            <input
                                type="text"
                                placeholder='Enter State'
                                {...register("state", { required: 'This is required' })}
                            />
                            <p>{errors.state?.message}</p>
                        </div>
                        <div className='input__wrap'>
                            <label>Zip Code</label>
                            <input
                                type="number"
                                placeholder='Enter Zip Code'
                                {...register("zipCode", { required: 'This is required' })}
                            />
                            <p>{errors.zipCode?.message}</p>
                        </div>
                        <div className='input__wrap'>
                            <label>Phone Number</label>
                            <input
                                type="number"
                                placeholder='Enter Phone Number'
                                {...register("phoneNumber", {
                                    required: 'This is required',
                                })}
                            />
                            <p>{errors.phoneNumber?.message}</p>
                        </div>
                    </div>
                    <div className="input__select">
                        <FormControl sx={{ m: 1, minWidth: 80 }}>
                            <InputLabel id="demo-simple-select-autowidth-label">Country</InputLabel>
                            <Select
                                labelId="demo-simple-select-autowidth-label"
                                id="demo-simple-select-autowidth"
                                value={age}
                                onChange={handleChange}
                                autoWidth
                                label="Age"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Twenty</MenuItem>
                                <MenuItem value={21}>Twenty one</MenuItem>
                                <MenuItem value={22}>Twenty one and a half</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className="buyd__form-head-btns">
                        <Button type="submit">Buy Now</Button>
                        <Button type="button" onClick={handleClose}>Cancel</Button>
                    </div>
                </form>
            </div>
            <div className='buyd__right'>
                <p id="buyd__right-head">Domain Details</p>
                <hr />
                <div className="price_container">
                    <p>tridmark.net</p>
                    <p id="price">{generateRandomPrice()} USD</p>
                </div>
                <div className="buyd__right-bottom">
                    <div className="buyd__right-bottom-div">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                            <path d="M22.6231 11.6894V12.6094C22.6218 14.7658 21.9235 16.864 20.6324 18.5912C19.3412 20.3183 17.5263 21.5818 15.4584 22.1933C13.3905 22.8047 11.1803 22.7313 9.15752 21.9839C7.13473 21.2366 5.4077 19.8555 4.23401 18.0464C3.06031 16.2374 2.50284 14.0974 2.64472 11.9457C2.78661 9.79393 3.62025 7.74569 5.02133 6.10643C6.4224 4.46718 8.31583 3.32474 10.4192 2.84951C12.5226 2.37427 14.7233 2.5917 16.6931 3.46936" stroke="#55B76E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M22.623 4.60938L12.623 14.6194L9.62305 11.6194" stroke="#55B76E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p>Privacy protection is on</p>
                    </div>
                    <div className="buyd__right-bottom-div">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                            <path d="M22.6231 11.6894V12.6094C22.6218 14.7658 21.9235 16.864 20.6324 18.5912C19.3412 20.3183 17.5263 21.5818 15.4584 22.1933C13.3905 22.8047 11.1803 22.7313 9.15752 21.9839C7.13473 21.2366 5.4077 19.8555 4.23401 18.0464C3.06031 16.2374 2.50284 14.0974 2.64472 11.9457C2.78661 9.79393 3.62025 7.74569 5.02133 6.10643C6.4224 4.46718 8.31583 3.32474 10.4192 2.84951C12.5226 2.37427 14.7233 2.5917 16.6931 3.46936" stroke="#55B76E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M22.623 4.60938L12.623 14.6194L9.62305 11.6194" stroke="#55B76E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p>Auto-renew is on</p>
                    </div>
                    <p id="buyd__right-bottom-text">This domain will be auto-renewed around August 1 every year. You will automatically be billed when the renewal occurs.</p>
                </div>
            </div>
        </div>
    )
}

export default BuyDomain