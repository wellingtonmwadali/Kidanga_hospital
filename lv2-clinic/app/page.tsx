import { Button } from "@/components/reusable/button"
import Image from "next/image";
import appointmentIcon from '../public/assets/icons/logo-full.svg'
import PatientForm from "@/components/forms/patientForm"
import OnboardingImage from "@/public/assets/images/onboarding-img.png"
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <Image
            src={appointmentIcon}
            height={1000}
            width={1000}
            alt=" Patient Appointment Logo"
            className="mb-12 h-10 w-fit"
          />
          <PatientForm />
        </div>
        <div className="text-14-regular mt-20 flex justify-between">
          <p className="justify-items-end text-dark-600 xl:text-left">
            ©2024 Kidanga Level 4 Hospital
          </p>
          <Link href='/?admin=true' className="text-green-500">Admin</Link>
        </div>
      </section>
      <Image
        src={OnboardingImage}
        height={1000}
        width={1000}
        alt="Onboarding Image"
        className="side-img max-w-[50%]"
      />
    </div>
  );
}
