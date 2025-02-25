// src/components/FAQ.js
import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';

const FAQ = () => {
    const faqs = [
        { question: "Do I need to have prior experience in Product Management?", answer: "No, the program is designed to be inclusive of all levels." },
        // Add more FAQs as needed
    ];

    return (
        <div style={{ padding: '40px 0' }}>
            {faqs.map((item, index) => (
                <Accordion key={index}>
                    <AccordionSummary>
                        <Typography>{item.question}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>{item.answer}</Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    );
};

export default FAQ;
