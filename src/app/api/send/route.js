// import { EmailTemplate } from '../../components/emailTemplate'
import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// const resend = new Resend(process.env.RESEND_API_KEY)
const transporter = nodemailer.createTransport({
  host: 'smtp.resend.com',
  secure: true,
  port: 465,
  auth: {
    user: 'resend',
    pass: process.env.RESEND_API_KEY
  }
})

export async function POST (req) {
  try {
    const { message } = await req.json()

    const info = await transporter.sendMail({
      from: 'onboarding@resend.dev',
      to: 'isaac1818180@gmail.com',
      subject: 'Mensaje envido desde el portafolio personal',
      html: `<div>${message}</div>`
    })

    console.log('Message sent: %s', info.messageId)

    return NextResponse.json('ok')
  } catch (error) {
    return NextResponse.json({ error })
  }
}
