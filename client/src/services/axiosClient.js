import { getBaseUrl } from "@/utils/getUrl";
import axios from "axios";

export const BASE_URL = `${getBaseUrl()}https://s12-16-ft-php-next-production.up.railway.app/api`;

export const axiosClient = axios.create({ baseURL: BASE_URL });
