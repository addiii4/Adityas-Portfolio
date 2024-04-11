import React, {useState} from 'react'

const Contact = () => {
  const [from, setfrom] = useState({name: '', email: '', message: ''})
  const handleChange = () => {
  
  }
  return (
    <section className='relative flex lg:flew-row flex-col max-container'>
      <div className='flex-1 min-w-[50%] flex-col'>
        <h1 className='heat-text'>Get in touch</h1>
        <form className='w-full flex flex-col gap-7 mt-14'>
          <label className='text-black-500 font-semibold'>
            Name
            <input
              type="text"
              name="name"
              className='input'
              placeholder='John'
              required
              value={form.name}
              onChange={handleChange}
            />
          </label>
        </form>
      </div>
    </section>
  )
}

export default Contact

