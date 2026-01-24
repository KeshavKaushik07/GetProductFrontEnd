import React, { useEffect, useState } from 'react'

const CheckOut = ({ setShowCheckOut, totalPrice, setCart, cart }) => {
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zip: ""
  });
  const [showProcessing,setShowProcessing] = useState(false);

  async function handleOrder() {
     setShowProcessing(true);
     await new Promise(res => setTimeout(res,1500));//to show pocessing animation 
     setShowProcessing(false);
     alert("Your order is Placed !");
    setCart([]);
    setShowCheckOut(false);
  }

  // useEffect(()=>{
  //   console.log(input)
  // },[input]);
  return (
    <>
      <div className="min-h-[90vh] flex flex-col m-5">

        <div className="w-full shadow-xl rounded-xl p-3 bg-amber-300 text-center">
          <h2 className="font-bold text-lg">Check Out</h2>
        </div>


        <div className="flex-1 flex flex-col sm:flex-row mt-4 gap-4 items-stretch">


          <div className="sm:w-1/4 w-full h-full flex flex-col bg-white rounded-lg shadow p-4 sm:text-xl">
            {cart.map((item, ind) => (
              <div className='flex justify-between w-full font-bold ' key={ind}>

                <div>{`${item.quantity} *  ${item.name} : `}</div>
                <div>${(item.price * item.quantity).toFixed(2)}</div>

              </div>
            ))}
            <hr className='text-black' />
            <div className='flex justify-between w-full font-bold'>
              <div>sub total : </div>
              <div>${totalPrice}</div>
            </div>
            <div className='flex justify-between w-full font-bold'>
              <div>Tax : </div>
              <div>{totalPrice > 100 ? `$0` : `$5`}</div>
            </div>
            <hr className='text-black' />
            <div className='flex gap-2 w-full font-bold justify-center'>
              <div>Total Amount : </div>
              <div>${(Number(totalPrice) + Number(totalPrice > 100 ? 0 : 5)).toFixed(2)}</div>
            </div>


          </div>


          <div className="w-full h-full flex flex-col bg-white rounded-lg shadow p-4 sm:text-xl justify-center items-center">

            <form className='mt-4 mb-4 flex flex-col sm:gap-5 gap-2.5'>
              <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                  <label htmlFor="first_name" className="block mb-2.5 text-xl font-bold text-heading">First name</label>
                  <input type="text" id="first_name" className="shadow bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5  placeholder:text-body h-11 " placeholder="John" required value={input.firstName} onChange={(e) => setInput({ ...input, firstName: `${e.target.value}` })} />
                </div>
                <div>
                  <label htmlFor="last_name" className="block mb-2.5 text-xl font-bold text-heading">Last name</label>
                  <input type="text" id="last_name" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow placeholder:text-body h-11 " placeholder="Doe" required value={input.lastName} onChange={(e) => setInput({ ...input, lastName: `${e.target.value}` })} />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2.5 text-xl font-bold text-heading">Email</label>
                  <input type="email" id="email" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow placeholder:text-body h-11 " placeholder="john@gmail.com" required value={input.email} onChange={(e) => setInput({ ...input, email: `${e.target.value}` })} />
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-2.5 text-xl font-bold text-heading">Phone number</label>
                  <input type="tel" id="phone" className="bg-neutral-secondary-medium border shadow text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 placeholder:text-body h-11  " placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required value={input.phone}
                    onChange={(e) => setInput({ ...input, phone: `${e.target.value}` })} />
                </div>

              </div>
              <div className="mb-6">
                <label htmlFor="address" className="block mb-2.5 text-xl font-bold text-heading">Address</label>
                <input type="email" id="address" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow placeholder:text-body h-11 " placeholder="" required value={input.address} onChange={(e) => setInput({ ...input, address: `${e.target.value}` })} />
              </div>
              <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                  <label htmlFor="city" className="block mb-2.5 text-xl font-bold text-heading">City</label>
                  <input type="text" id="city" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow placeholder:text-body h-11 " placeholder="John" required value={input.city} onChange={(e) => setInput({ ...input, city: `${e.target.value}` })} />
                </div>
                <div>
                  <label htmlFor="zip" className="block mb-2.5 text-xl font-bold text-heading">ZIP/Postal code</label>
                  <input type="text" id="zip" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow placeholder:text-body h-11 " placeholder="Doe" required value={input.zip} onChange={(e) => setInput({ ...input, zip: `${e.target.value}` })} />
                </div>
              </div>
              <div className="flex items-start mb-6">
                <div className="flex items-center h-5">
                  <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft" required />
                </div>
                <label htmlFor="remember" className="ms-2 text-sm font-bold text-heading">I agree with the <a href="#" className="text-fg-brand hover:underline">terms and conditions</a>.</label>
              </div>
            </form>

          </div>

        </div>
<div className="w-full flex justify-center relative">


  {!showProcessing && (
    <button
      onClick={handleOrder}
      className="
      m-2
        bg-amber-300
        px-5 sm:px-8
py-3 sm:py-4
        rounded-lg
        font-bold
        shadow
text-xl sm:text-2xl md:text-4xl
        transition
      "
    >
      Place Order
    </button>
  )}

  {showProcessing && (
    <button
      disabled
      className="
      m-2
        bg-amber-200
        px-5 sm:px-8
py-3 sm:py-4
        rounded-lg
        font-bold
        shadow
        text-xl sm:text-2xl md:text-4xl

        flex items-center gap-3
        cursor-not-allowed
      "
    >
      <span>Processing…</span>

      <span
        className="
          w-5 h-5 sm:w-6 sm:h-6
          border-2 sm:border-4
          border-blue-500
          border-t-transparent
          rounded-full
          animate-spin
        "
      />
    </button>
  )}

</div>

      </div>

    </>
  )
}

export default CheckOut