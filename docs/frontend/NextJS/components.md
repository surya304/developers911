---
sidebar_position: 1
---

# Reusable Components

* Tooltip
* Alert Box
* Input 
* Date Picker
* Textarea
* Toggle 
* Dropdown 
* Multi Select 
* Table 
* Data Table 
* Button 
* Image Picker 
* Sidebar & Navbar 

## Tooltip


## Alert Box

```javascript title="alertbox.js"
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { useEffect } from 'react'


function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
export default function Alert({data, confirmTrigger, cancelTrigger, openAlert}) {
  const [inputBox, setInputBox] = useState("")
  const [errorMsg, setErrorMsg] = useState(false)

  function confirmClick() {

    if (data.inputBox.show == true) {
        setErrorMsg(false)
        if(inputBox == data.inputBox.placeholder){
            confirmTrigger()
        }else{
            //show error message
            setErrorMsg(true)
        }
    }else{
        confirmTrigger()
    }
  }

  return (
    <Transition.Root show={openAlert} as={Fragment}>
      <Dialog as="div" className="relative z-10"  onClose={() => cancelTrigger()}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    <data.icon.iconSelected className={classNames("h-6 w-6", `text-${data.icon.color}-500`)} aria-hidden="true" />
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                      {data.title}
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        {data.message}
                      </p>
                    </div>
                    {data.inputBox.show == true && (
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            {data.inputBox.label}
                            </label>
                            <div className="mt-1">
                            <input
                                onChange={(e) => setInputBox(e.target.value)}
                                type="text"
                                value={inputBox}
                                required
                                className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            />
                            {errorMsg == true && (
                                <small>{data.inputBox.errorMessage}</small>
                            )}

                            </div>
                        </div>
                    )}

                  </div>
                </div>
                <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => confirmClick()}
                  >
                    {data.confirmButton.text}
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm"
                    onClick={() => cancelTrigger()}
                  >
                    {data.dismissButton.text}
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
```

Referencing the Alertbox inside a page & the customization options 👇

```javascript title="page.js"
const [openAlert, setOpenAlert] = useState(true)
var deleteMsg = 'JEEVAN'

const [alertObj, setAlertObj] = useState({
  type: 'header',
  title: 'Replace Header?',
  message: 'You can add Header only once',
  confirmButton: {
    show: true,
    color: 'green',
    text: 'Confirm',
  },
  dismissButton: {
    show: true,
    color: 'red',
    text: 'Close',
  },
  icon: {
    show: true,
    color: 'yellow',
    iconSelected: ExclamationTriangleIcon,
  },
  inputBox: {
    show: true,
    placeholder: deleteMsg,
    label: `Enter ${deleteMsg} to delete`,
    errorMessage: 'Unable to delete',
  },
})

const cancelTrigger = () => {
  setOpenAlert(false)
}

function confirmTrigger() {
  console.log('confirm')
  setOpenAlert(false)
}

return (
<Alert
  openAlert={openAlert}
  cancelTrigger={cancelTrigger}
  data={alertObj}
  confirmTrigger={confirmTrigger}
/>
)
```

## Input 


```javascript title="input.js"
import { Fragment } from 'react'
import { ExclamationCircleIcon } from '@heroicons/react/24/outline'

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Input({data, input, setInput}) {
  return (
    <div>
      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
        {data.label}
      </label>
      <div className="mt-1">
        <input
          onChange={(e) => setInput(e.target.value)}
          type={data.type}
          value={input}
          required
          className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        />
      </div>
    </div>
  )
}











```

## Date Picker


## Textarea


## Toggle 


## Dropdown 


## Multi Select 


## Table 


## Data Table 


## Button 


## Image Picker 


## Sidebar & Navbar 



