import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DeleteUserForm from "@/Pages/Profile/Partials/DeleteUserForm";
import UpdatePasswordForm from "@/Pages/Profile/Partials/UpdatePasswordForm";
import UpdateProfileInformationForm from "@/Pages/Profile/Partials/UpdateProfileInformationForm";
import { Head } from "@inertiajs/react";
import { PageProps } from "@/Types";

export default function Edit({
  mustVerifyEmail,
  status,
}: PageProps<{ mustVerifyEmail: boolean; status?: string }>) {
  return (
    <>ah shit</>
    // <AuthenticatedLayout
    //     header={
    //         <h2 className="font-semibold text-gray-800 text-xl leading-tight">
    //             Profile
    //         </h2>
    //     }
    //     >
    //     <Head title="Profile" />

    //     <div className="py-12">
    //         <div className="space-y-6 mx-auto sm:px-6 lg:px-8 max-w-7xl">
    //             <div className="bg-white shadow p-4 sm:p-8 sm:rounded-lg">
    //                 <UpdateProfileInformationForm
    //                     mustVerifyEmail={mustVerifyEmail}
    //                     status={status}
    //                     className="max-w-xl"
    //                 />
    //             </div>

    //             <div className="bg-white shadow p-4 sm:p-8 sm:rounded-lg">
    //                 <UpdatePasswordForm className="max-w-xl" />
    //             </div>

    //             <div className="bg-white shadow p-4 sm:p-8 sm:rounded-lg">
    //                 <DeleteUserForm className="max-w-xl" />
    //             </div>
    //         </div>
    //     </div>
    // </AuthenticatedLayout>
  );
}
