import { useLocation } from "react-router-dom";
import "../cssfiles/pay.css";
import { useFormik } from "formik";
import { paySchema } from "../schemas/index";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setLoginOpen } from "../features/loginSlice";
import { useEffect, useState } from "react";
// import { loadRazorpayScript } from "./Razorpay";

const initialValues = {
  name: "",
  tel: "",
  pincode: "",
  address: "",
  city: "",
  state: "",
};
const Pay = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [orderId, setOrderId] = useState("");
  const [orderIdInDatabase, setOrderIdInDatabase] = useState("");
  const data = location.state;

  //signin checker
  useEffect(() => {
    const userid = localStorage.getItem("userId");
    const cookieValue = document.cookie.replace(
      /(?:(?:^|.*;\s*)userId\s*\=\s*([^;]*).*$)|^.*$/,
      "$1"
    );

    if (userid && cookieValue === userid) {
      dispatch(setLoginOpen(true));
    }
  }, []);

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: paySchema,
      onSubmit: async (values, { resetForm }) => {
        console.log(values);

        const { address, city, name, pincode, state, tel } = values;
        const refId = localStorage.getItem("userId");
        try {
          const response = await axios.post(
            "http://localhost:8400/place-order",
            {
              ref_id: refId,
              cloth_id: data.cloth_id,
              fullname: name,
              mobileno: tel,
              pincode: pincode,
              address: address,
              city: city,
              state: state,
              amount: data.price,
            }
          );
          console.log("place-order response => ", response);
          if (response.data.success) {
            setOrderId(response.data.orderId);
            setOrderIdInDatabase(response.data.orderIdInDatabase);
            const options = {
              key: "rzp_test_5JbdadHGYQYiHg",
              amount: 1 * 100, // Amount in paisedata.price
              currency: "INR",
              name: "Your Company Name",
              description: "Order Payment",
              order_id: response.data.orderId,
              handler: (response) => {
                // Handle payment success or failure
                handlePaymentResponse(response);
              },
            };
            // razorpay instance
            const razorpayInstance = new window.Razorpay(options);
            razorpayInstance.open();
            console.log(razorpayInstance);
          } else {
            window.alert("Order not placed !");
          }
          resetForm();
        } catch (error) {
          console.log(error);
          window.alert("Something went wrong !");
        }
      },
    });

  const handlePaymentResponse = async (response) => {
    try {
      // Send payment response to backend for verification
      const paymentResponse = await axios.post(
        "http://localhost:8400/payment-response",
        {
          orderId: response.razorpay_order_id,
          paymentId: response.razorpay_payment_id,
          signature: response.razorpay_signature,
          orderIdInDatabase: orderIdInDatabase,
        }
      );

      console.log(paymentResponse);
      if (paymentResponse.data.success) {
        console.log("Payment successful");
        // Update UI or navigate to a success page
      } else {
        console.error("Payment failed");
        window.alert("Something went wrong !");
        // Update UI or show error message
      }
    } catch (error) {
      console.error("Error processing payment response:", error);
      window.alert("Something went wrong !");
    }
  };

  return (
    <div className="pay container-fluid">
      <div className="personal-details">
        <div className="details">
          <form onSubmit={handleSubmit}>
            <b>
              <h4>CONTACT DETAILS</h4>
            </b>
            <label>Full Name*</label>
            <input
              type="text"
              name="name"
              id="name"
              required
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.name && touched.name ? (
              <p className="form-error">{errors.name}</p>
            ) : null}

            <label>Mobile No*</label>
            <input
              type="tel"
              name="tel"
              id="tel"
              required
              value={values.tel}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.tel && touched.tel ? (
              <p className="form-error">{errors.tel}</p>
            ) : null}

            <b>
              <h4 className="address-heading">ADDRESS</h4>
            </b>
            <label>Pincode*</label>
            <input
              type="text"
              name="pincode"
              id="pincode"
              required
              value={values.pincode}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.pincode && touched.pincode ? (
              <p className="form-error">{errors.pincode}</p>
            ) : null}

            <input
              type="text"
              name="address"
              id="address"
              placeholder="Address(House no, Area and Street)"
              required
              value={values.address}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.address && touched.address ? (
              <p className="form-error">{errors.address}</p>
            ) : null}

            <label>City*</label>
            <input
              type="text"
              name="city"
              id="city"
              required
              value={values.city}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.city && touched.city ? (
              <p className="form-error">{errors.city}</p>
            ) : null}

            <label>State*</label>
            <select
              name="state"
              id="state"
              value={values.state}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            >
              <option value="">Select State</option>
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Arunachal Pradesh">Arunachal Pradesh</option>
              <option value="Assam">Assam</option>
              <option value="Bihar">Bihar</option>
              <option value="Chhattisgarh">Chhattisgarh</option>
              <option value="Goa">Goa</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Haryana">Haryana</option>
              <option value="Himachal Pradesh">Himachal Pradesh</option>
              <option value="Jharkhand">Jharkhand</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Kerala">Kerala</option>
              <option value="Madhya Pradesh">Madhya Pradesh</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Manipur">Manipur</option>
              <option value="Meghalaya">Meghalaya</option>
              <option value="Mizoram">Mizoram</option>
              <option value="Nagaland">Nagaland</option>
              <option value="Odisha">Odisha</option>
              <option value="Punjab">Punjab</option>
              <option value="Rajasthan">Rajasthan</option>
              <option value="Sikkim">Sikkim</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Telangana">Telangana</option>
              <option value="Tripura">Tripura</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="Uttarakhand">Uttarakhand</option>
              <option value="West Bengal">West Bengal</option>
            </select>
            <input
              type="submit"
              value="SAVE AND DELIVER HERE"
              className="submit"
            />
          </form>
        </div>
      </div>

      <div className="order-summary">
        <h4>PRICE DETAILS</h4>

        <div>
          <span>Product MRP</span>
          <span>{data}</span>
        </div>
        <div>
          <span>Delivery Fees</span>
          <span>fetch karna hoga</span>
        </div>
        <hr />
        <div>
          <span>Payable amount</span>
          <span>dekhta hu</span>
        </div>
      </div>
    </div>
  );
};

export default Pay;
