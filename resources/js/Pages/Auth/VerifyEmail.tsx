import GuestLayout from "@/Layouts/GuestLayout";
import PrimaryButton from "@/Components/PrimaryButton";
import { Head, Link, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";

export default function VerifyEmail({ status }: { status?: string }) {
    const { post, processing } = useForm({});
    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route("verification.send"));
    };
    return (
        <GuestLayout>
            <Head title="Email Verification" />
            <div className="mb-4 text-gray-600 text-sm">
                Thanks for signing up! Before getting started, could you verify
                your email address by clicking on the link we just emailed to
                you? If you didn't receive the email, we will gladly send you
                another.
            </div>

            {status === "verification-link-sent" && (
                <div className="mb-4 font-medium text-green-600 text-sm">
                    A new verification link has been sent to the email address
                    you provided during registration.
                </div>
            )}

            <form onSubmit={submit}>
                <div className="flex justify-between items-center mt-4">
                    <PrimaryButton disabled={processing}>
                        Resend Verification Email
                    </PrimaryButton>

                    <Link
                        href={route("logout")}
                        method="post"
                        as="button"
                        className="rounded-md focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 text-gray-600 text-sm hover:text-gray-900 underline focus:outline-none">
                        Log Out
                    </Link>
                </div>
            </form>
        </GuestLayout>
    );
}
