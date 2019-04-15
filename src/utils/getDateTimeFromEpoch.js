import { format } from "date-fns";

export default function getDateTimeFromEpoch(timestamp) {
    return format(new Date(timestamp), 'DD-MM-YYYY HH:mm').split(' ')
}
