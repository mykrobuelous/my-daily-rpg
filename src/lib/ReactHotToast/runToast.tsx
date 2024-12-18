import toast from 'react-hot-toast';
import CustomToast from './CustomToast';
import { ReactNode } from 'react';

export const runToast = (message: string, Icon?: ReactNode) =>
    toast((t) => <CustomToast text={message} Icon={Icon} onClick={() => toast.dismiss(t.id)} />);
