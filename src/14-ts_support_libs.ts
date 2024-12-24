import { subDays, format } from 'date-fns';

const date = subDays(new Date(), 10);

console.log(format(date, 'yyyy-MM-dd'));
