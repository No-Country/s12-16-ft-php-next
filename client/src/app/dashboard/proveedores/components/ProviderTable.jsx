'use client'
import { axiosClient } from "@/services/axiosClient";
import React, { useEffect, useState } from "react";
import { Pagination } from "@mui/material";

const ProviderTable = () => {

    const [Providers, setProviders] = useState([]);

    //function to fetch provider's data
    const fetchProvider = async () => {
        try {
            const response = await axiosClient.get('/provider');
            setProviders(response.data.providers);
        } catch (error) {
            console.log("There was an error fetching data", error)
        };

    };

    useEffect(() => {
        fetchProvider()
    }, [])

    // Lógica para la paginación
    const [page, setPage] = useState(1);
    const itemsPerPage = 8;
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const handlePageChange = (event, value) => {
        setPage(value);
    };

    return (
        <div className="h-screen p-5 text-textColor">
            <div className="rounded-lg border bg-white p-5 shadow-lg">
                <table className="w-full">
                    <thead className="border-b-2">
                        <tr>
                            <th className="w-24 p-3 text-left text-sm tracking-wide">
                                Nombre
                            </th>
                            <th className="p-3 text-left text-sm tracking-wide">
                                Dirección
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 ">
                        {

                            Providers.slice(startIndex, endIndex).map((provider, index) => (
                                <tr key={index} className="hover:bg-gray-100">
                                    <td className="w-24 whitespace-nowrap p-3 text-sm">{provider.name}</td>
                                    <td className="whitespace-nowrap p-3 text-sm">{provider.direction}</td>

                                </tr>
                            ))

                        }

                    </tbody>
                </table>
                <div className="flex justify-center">
                    <Pagination
                        count={Math.ceil(Providers.length / itemsPerPage)}
                        page={page}
                        color="primary"
                        onChange={handlePageChange}
                    />
                </div>
            </div>
        </div>
    )
}
export default ProviderTable