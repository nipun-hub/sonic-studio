import React from 'react'
import bg1 from '../assets/Team/1.jpg'
import bg2 from '../assets/Team/2.jpg'
import bg3 from '../assets/Team/3.jpg'
import bg4 from '../assets/Team/4.jpg'
import bg5 from '../assets/Team/5.jpg'
import bg6 from '../assets/Team/6.jpg'
import bg7 from '../assets/Team/7.jpg'
import bg8 from '../assets/Team/8.jpg'

const teamMembers = [
  {
    image: "https://res.cloudinary.com/dldtrjalo/image/upload/v1712435928/1_ctn1bd.jpg",
    name: 'Shan Amalka',
    role: 'Photography & Retouched'
  },
  {
    image: "https://res.cloudinary.com/dldtrjalo/image/upload/v1712435928/2_ajxizp.jpg",
    name: 'D Hettiarachchi',
    role: 'Photography'
  },
  {
    image: "https://res.cloudinary.com/dldtrjalo/image/upload/v1712435928/3_kimzbr.jpg",
    name: 'Shanuka Nipun',
    role: 'Retouched'
  },
  {
    image: "https://res.cloudinary.com/dldtrjalo/image/upload/v1712435926/4_tztnhw.jpg",
    name: 'Vidusha Theniya',
    role: 'Photography'
  },
  {
    image: "https://res.cloudinary.com/dldtrjalo/image/upload/v1712435927/5_m82ojh.jpg",
    name: 'Vidusha Theniya',
    role: 'Photography'
  },
  {
    image: "https://res.cloudinary.com/dldtrjalo/image/upload/v1712435930/6_ueeav7.jpg",
    name: 'Isanka Madushan',
    role: 'Photography'
  },
  {
    image: "https://res.cloudinary.com/dldtrjalo/image/upload/v1712435929/7_cfac46.jpg",
    name: 'Ishan Maduranga',
    role: 'Photography'
  },
  {
    image: "https://res.cloudinary.com/dldtrjalo/image/upload/v1712435930/8_jsxznf.jpg",
    name: 'Geeth Hettiarachchi',
    role: 'Photography'
  }
]

const Team = () => {
  return (
    <div id='team' className="max-w-7xl p-3 mx-auto py-[100px]">
      <p data-aos="fade-up" className="text-[35px] md:text-[55px] text-center">Our Team</p>
      <p data-aos="fade-up" className="text-[18px] md:text-[35px] text-center text-[#726B6B] mt-5">
      Our property. They are ready to make a great sacrifice for you
      </p>
      <div className="grid md:gap-7 gap-3  md:grid-cols-4 grid-cols-2 mt-[50px] md:mt-[100px]">
        {teamMembers.map((member, index) => (
          <div key={index} data-aos="fade-up" className="md:p-4 p-2 group hover:shadow-lg border md:rounded-[20px] rounded-[10px] transition-all duration-200">
            <div className='w-full overflow-hidden md:rounded-[20px] rounded-[10px]'>

            <img
              src={member.image}
              className="md:h-[300px] h-[150px] w-full object-cover md:rounded-[20px] rounded-[10px] group-hover:scale-105 transition-all duration-200 "
              alt=""
              />
              </div>
            <p className="md:text-[30px] text-[22px] mt-5">{member.name}</p>
            <p className="md:text-[18px] text-[15px] opacity-50 my-2">
              {member.role}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Team