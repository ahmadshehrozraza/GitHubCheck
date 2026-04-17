import SignUpCard from "@/features/auth/components/SignUpCard";


export default function SignUpPage() {
  return(
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold text-center mt-10">Sign Up Page</h1>
      <SignUpCard />
    </div>
  )
}