import React from 'react';
import { FloatButton } from 'antd';
// import emailjs from '@emailjs/browser';

const EmailButton: React.FC = () => {

    // const [open, setOpen] = useState(false);
    // const sendEmail = useCallback((e) => {
    //     e.preventDefault();
    //     emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_PUBLIC_KEY')
    //         .then(() => alert("Message sent!"))
    //         .catch(() => alert("Failed to send"));
    // }, []);
    return (
        <>
            <FloatButton
                style={{ insetBlockEnd: 156 }} tooltip={<div>Email</div>}
                onClick={() => { window.open('mailto:kecktrevor55@gmail.com') }}
            />
        </>
    );
};


export default EmailButton;