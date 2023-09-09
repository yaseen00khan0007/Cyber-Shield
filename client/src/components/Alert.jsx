import React, { useContext } from "react";
import AlertContext from "../context/alertState/AlertContext";

export default function Alert() {
    const AObj = useContext(AlertContext);
  return (
    <>
        <div>

            {AObj.alert && <div
            className= {` flex item-center p-4 mb-4 m-2 text-sm text-${AObj.alert.color}-800 border border-${AObj.alert.color}-300 rounded-lg bg-${AObj.alert.color}-50 dark:text-${AObj.alert.color}-400 dark:border-${AObj.alert.color}-800`}
            role="alert"
            >
                <svg
                    class="flex-shrink-0 inline w-4 h-4 mr-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>
                <span class="sr-only">info</span>
                <div>
                    <span class="font-medium"><strong>{AObj.alert.type} :</strong> {AObj.alert.msg}</span>
                </div>
            </div>}
        </div>
        {/* <div class=" flex items-center p-4 mb-4 m-2 text-sm text-green-800 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800" role="alert">
        <svg class="flex-shrink-0 inline w-4 h-4 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
        </svg>
        <span class="sr-only">Info</span>
        <div>
          <span class="font-medium">Success alert!</span>
        </div>
      </div> */}
    </>
  );
}