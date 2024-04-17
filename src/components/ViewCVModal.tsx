
"use client";

import { fetchData } from "@/app/store/api/apiSlice";
import { EyeIcon } from "@heroicons/react/16/solid";
import { Button, Modal } from "flowbite-react";
import { useEffect, useState } from "react";
import { Document, Page, pdfjs } from 'react-pdf'
import { useDispatch, useSelector } from "react-redux";
pdfjs.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';


export default function ViewCVModal(props: any) {
    const [openModal, setOpenModal] = useState(false);
    const [width, setWidth] = useState(1000);
    const dispatch = useDispatch<any>();
    const state: any = useSelector((state) => state);

    useEffect(() => {
        dispatch(fetchData("/users"))
    }, [])

    let userListData: any = state.apiData.data;
    let filteredApiData: any;
    if (userListData !== null && userListData !== undefined) {
        filteredApiData = userListData.filter((item: any) => { return item.id === props.userid });
    }
    console.log(filteredApiData)
    return (
        <>
            <label onClick={() => setOpenModal(true)} className="common-btn-2 mr-2 font-semibold px-10 py-3" ><span className="text flex items-center">View CV<EyeIcon className="h-5 rounded-sm ml-2" /></span></label>
            <Modal show={openModal} size="6xl" onClose={() => setOpenModal(false)}>
                <Modal.Header className="bg-theme-green text-white viewcv-modal"><span className="text-white">{filteredApiData[0].name}</span></Modal.Header>
                <Modal.Body>
                    <Document file={`http://localhost:3000/${filteredApiData[0].cv}`} >
                        <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
                    </Document>
                </Modal.Body>
            </Modal>
        </>
    );
}
