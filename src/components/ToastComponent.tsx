
"use client";

import { Toast } from "flowbite-react";
import { HiCheck, HiExclamation, HiX } from "react-icons/hi";

export default function ToastComponent(props: any) {
    return (
        <div className="flex flex-col gap-4">
            {(props.toastType === "success") ?
                <Toast className="fixed top-3 right-1" style={{ zIndex: "100" }}>
                    <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                        <HiCheck className="h-5 w-5" />
                    </div>
                    <div className="ml-3 text-sm font-normal">{props.msg}</div>
                    <Toast.Toggle />
                </Toast> : <></>
            }
            {(props.toastType === "delete") ?
                <Toast className="fixed top-3 right-1" style={{ zIndex: "100" }}>
                    <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200">
                        <HiX className="h-5 w-5" />
                    </div>
                    <div className="ml-3 text-sm font-normal">{props.msg}</div>
                    <Toast.Toggle />
                </Toast> : <></>
            }
            {(props.toastType === "warning") ?
                <Toast className="fixed top-3 right-1" style={{ zIndex: "100" }}>
                    <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-500 dark:bg-orange-700 dark:text-orange-200">
                        <HiExclamation className="h-5 w-5" />
                    </div>
                    <div className="ml-3 text-sm font-normal">{props.msg}</div>
                    <Toast.Toggle />
                </Toast> : <></>
            }
        </div>
    );
}
