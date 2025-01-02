import AppURL from "../../../../api/AppURL";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { CartContext } from "../../contexts/cart.context";


const CheckoutDetails = (props) => {

    const { cartItems, cartTotal } = useContext(CartContext);
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [address_1, setAddress1] = useState("");
    const [address_2, setAddress2] = useState("");
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [district, setDistrict] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [create_account, setAccount] = useState("");

  // Flag to handle submission
  const [submitFlag, setSubmitFlag] = useState(false);

  // The handleSubmit method that gets triggered when the button is clicked
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Check if all fields are populated before setting the submit flag
    if (
      firstname &&
      lastname &&
      email &&
      mobileNumber &&
      address_1 &&
      address_2 &&
      country &&
      city &&
      district &&
      zipcode &&
      cartItems.length > 0 &&
      cartTotal > 0
    ) {
      setSubmitFlag(true);  // Set the flag to trigger the post request
    } else {
      console.error('Please fill in all the required fields.');
    }
  };

  // useEffect for handling the actual data submission when submitFlag is true
  useEffect(() => {
    if (submitFlag) {
      const submitOrderDetails = async () => {
        try {
          const response = await axios.post(AppURL.submitOrderDetails, {
            firstname,
            lastname,
            email,
            mobileNumber,
            address_1,
            address_2,
            country,
            city,
            district,
            zipcode,
            create_account,
            cartItems,
            cartTotal
          });

          console.log(response.data);

          const responseData = response.data; 

          if (props.history) {
            props.history.push({
              pathname: '/OrderSuccess',
              state: { data: responseData },
            });
          } else {
            console.error('Props.history is undefined');
            // Handle the case when history is not available
          }
        } catch (err) {
          console.error('Error submitting order details:', err);
        }
      };

      submitOrderDetails();
      setSubmitFlag(false);  // Reset the flag after submission
    }
  }, [submitFlag]);  // This effect is triggered when the submitFlag changes

    return (
        <form>
        <div className="container-fluid pt-5">
        <div className="row px-xl-5">
          <div className="col-lg-8">
            <div className="mb-4">
              <h4 className="font-weight-semi-bold mb-4">Billing Address</h4>
              <div className="row">
                <div className="col-md-6 form-group">
                  <label>First Name</label>
                  <input className="form-control" type="text" placeholder="John" onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div className="col-md-6 form-group">
                  <label>Last Name</label>
                  <input className="form-control" type="text" placeholder="Doe" onChange={(e) => setLastName(e.target.value)} />
                </div>
                <div className="col-md-6 form-group">
                  <label>E-mail</label>
                  <input className="form-control" type="text" placeholder="example@email.com" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="col-md-6 form-group">
                  <label>Mobile No</label>
                  <input className="form-control" type="text" placeholder="+880123456789" onChange={(e) => setMobileNumber(e.target.value)} />
                </div>
                <div className="col-md-6 form-group">
                  <label>Address Line 1</label>
                  <input className="form-control" type="text" placeholder="123 Street" onChange={(e) => setAddress1(e.target.value)} />
                </div>
                <div className="col-md-6 form-group">
                  <label>Address Line 2</label>
                  <input className="form-control" type="text" placeholder="123 Street" onChange={(e) => setAddress2(e.target.value)} />
                </div>
                <div className="col-md-6 form-group">
                  <label>Country</label>
                  <select className="custom-select" onChange={(e) => setCountry(e.target.value)}>
                    <option value="">Select Country</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="Afghanistan">Afghanistan</option>
                    <option>Albania</option>
                    <option>Algeria</option>
                    <option>United States</option>
                  </select>
                </div>
                <div className="col-md-6 form-group">
                  <label>City</label>
                  <input className="form-control" type="text" placeholder="Mirpur" onChange={(e) => setCity(e.target.value)} />
                </div>
                <div className="col-md-6 form-group">
                  <label>District</label>
                  <input className="form-control" type="text" placeholder="Dhaka" onChange={(e) => setDistrict(e.target.value)} />
                </div>
                <div className="col-md-6 form-group">
                  <label>ZIP Code</label>
                  <input className="form-control" type="text" placeholder={1206} onChange={(e) => setZipcode(e.target.value)} />
                </div>
                <div className="col-md-12 form-group">
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="newaccount" onChange={(e) => setAccount(e.target.value)} />
                    <label className="custom-control-label" htmlFor="newaccount">Create an account</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card border-secondary mb-5">
              <div className="card-header bg-secondary border-0">
                <h4 className="font-weight-semi-bold m-0">Order Total</h4>
              </div>
              <div className="card-body">
                <h5 className="font-weight-medium mb-3">Products</h5>
                { cartItems.map((item, index) => (
                <div className="d-flex justify-content-between" key={index}>
                  <p>{item.product_title} ({item.quantity})</p>
                  <p>${item.quantity * item.product_price}</p>
                </div>
                )) }
                <hr className="mt-0" />
                <div className="d-flex justify-content-between mb-3 pt-1">
                  <h6 className="font-weight-medium">Subtotal</h6>
                  <h6 className="font-weight-medium">${cartTotal}</h6>
                </div>
                <div className="d-flex justify-content-between">
                  <h6 className="font-weight-medium">Shipping</h6>
                  <h6 className="font-weight-medium">$10</h6>
                </div>
                
              </div>
              <div className="card-footer border-secondary bg-transparent">
                <div className="d-flex justify-content-between mt-2">
                  <h5 className="font-weight-bold">Total</h5>
                  <h5 className="font-weight-bold">${cartTotal + 10}</h5>
                </div>
              </div>
            </div>
            <div className="card border-secondary mb-5">
              <div className="card-header bg-secondary border-0">
                <h4 className="font-weight-semi-bold m-0">Payment</h4>
              </div>
              <div className="card-body">
                <div className="form-group">
                  <div className="custom-control custom-radio">
                    <input type="radio" className="custom-control-input" name="payment" id="paypal" />
                    <label className="custom-control-label" htmlFor="paypal">SSLCommerz</label>
                  </div>
                </div>
                <div className>
                  <div className="custom-control custom-radio">
                    <input type="radio" className="custom-control-input" name="payment" id="banktransfer" />
                    <label className="custom-control-label" htmlFor="banktransfer">Cash On Delivery (COD)</label>
                  </div>
                </div>
              </div>
              <div className="card-footer border-secondary bg-transparent">
                <button className="btn btn-lg btn-block btn-primary font-weight-bold my-3 py-3" onClick={handleSubmit}>Place Order</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </form>
    );
};

export default CheckoutDetails;