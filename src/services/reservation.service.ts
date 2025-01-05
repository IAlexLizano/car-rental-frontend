import { message } from "antd";
import { api } from "./api.service";
import { IRental } from "../types/rentail";
import { IVerify, IVerifyResponse } from "../types/Verify";

export const fetchReservations = async (): Promise<IRental[]> => {
    const token = localStorage.getItem("authToken");
    const response = await api.get(`/rental/client`,{
        headers: {
            Authorization: `Bearer ${token}`,
          },
    });
    const data = response.data;
    const filteredReservations = data.filter(reservation => reservation.status !== 'CANCELADO');
    return filteredReservations.map((reservation: any) => ({
        rentalId: reservation.rentalId,
        rentalDate: reservation.rentalDate,
        rentalDays: reservation.rentalDays,
        vehicle: reservation.vehicle,
        createdAt: reservation.createdAt,
        status: reservation.status,
    }));
};

export const verifyReservation = async (verify:IVerify): Promise<IVerifyResponse> => {
    const token = localStorage.getItem("authToken");
    const response = await api.post(`/rental/verify`,verify,{
        headers: {
            Authorization: `Bearer ${token}`,
          },
    });
    const data = response.data;
    return data
    
};

export const createReservation = async (reservation: any): Promise<boolean> => {
    try {
        const token = localStorage.getItem("authToken");
        if (!token) {
            throw new Error("Token de autenticación no encontrado");
        }
    
        const reservationData = {
            rentalDate: reservation.reservationDate, // Fecha de inicio de la reserva
            rentalDays: reservation.reservationDays,             // Número de días de la reserva
            vehicleId: reservation.vehicleId,                // ID del vehículo
        };
    
        const response = await api.post(
            `/rental/Client`, // URL de la API
            reservationData,        // Datos del cuerpo de la solicitud
            {
                headers: {
                    Authorization: `Bearer ${token}`, // Encabezado con el token de autenticación
                },
            }
        );
    
        if (response.status === 200) {
            return true; // Reserva creada con éxito
        } else {
            return false; // Si la respuesta no fue exitosa
        }
    } catch (error) {
        console.error("Error al crear la reserva:", error);
        throw new Error("Error al crear la reserva");
    }
    
    
};

export const updateReservation = async (reservationId: number, reservationData: any): Promise<any> => {
    try {
        const data ={
            rentalDate: reservationData.reservationDate,
            rentalDays: reservationData.reservationDays,
            vehicleId: reservationData.vehicleId
        }
        const token = localStorage.getItem("authToken");
        const response = await api.patch(`/rental/client/${reservationId}`, data, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        throw new Error("Error al actualizar la reserva");
    }
};
export const deleteReservation = async (reservationID: number) => {
    try {
        const token = localStorage.getItem("authToken");
        await api.delete(`/rental/client/${reservationID}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
    });
        message.success("Reserva eliminado con éxito.");
    } catch (error) {
        message.error("Error al eliminar la Reserva.");
    }   
};