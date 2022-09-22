import React from 'react'
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import Slide from '@mui/material/Slide';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useState } from 'react';
import Search from 'antd/lib/transfer/search'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'


const SearchBar = () => {
    const [checked, setChecked] = useState(false);
    
    const handleChange = () => {
        setChecked(true);
    };
    
    const handleClose = () => {
        setChecked(false)
    }
    const icon = (
        <Box sx={{ width: 800, height: 100 }}>
            <input type="text" style={{ backgroundColor: "black" }} /> 
            <button onClick={handleClose}>close</button>
        </Box>
    );

    return (
        <div>
            <Box sx={{ height: 180 }}>
                <Box sx={{ width: `calc(100px + 16px)` }}>
                    <FormControlLabel
                        control={<button onClick={handleChange} >
                            <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Search</span>
                            <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
                        </a></button>
                        }

                    />
                    <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
                        {icon}
                    </Slide>
                </Box>
            </Box>
        </div>
    )
}

export default SearchBar
