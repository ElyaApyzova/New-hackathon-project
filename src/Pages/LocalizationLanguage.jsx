import React, { useState } from 'react';
import { Stack, Typography } from '@mui/material';
import RussianFlag from 'path_to_russian_flag_image';
import KyrgyzFlag from 'path_to_kyrgyz_flag_image';

const LocalizationSection = () => {
    const [language, setLanguage] = useState('ru'); 

    const handleLanguageChange = () => {
        if (language === 'ru') {
            setLanguage('kg'); // Change to Kyrgyz
        } else {
            setLanguage('ru'); // Change back to Russian
        }
    };

    return (
        <Stack direction='row' spacing={1} alignItems="center" onClick={handleLanguageChange}>
            {language === 'ru' ? (
                <img src={RussianFlag} alt="Russian Flag" />
            ) : (
                <img src={KyrgyzFlag} alt="Kyrgyz Flag" />
            )}
            <Typography sx={{ fontSize: '14px' }}>{language === 'ru' ? 'Русский' : 'Кыргызча'}</Typography>
        </Stack>
    );
};

export default LocalizationSection;