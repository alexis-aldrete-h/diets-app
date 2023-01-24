import './SearchBar.css';

import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';


const ids = ["SLK-00001", "SLK-00002", "SLK-00003", "SLK-00004", "SLK-00005"];
const iniciales = ["DAAH", "RPPE", "SACS", "LFSC", "OJMS"];
const calorias = ["1000","1500","1750","2000","2200","2500"];

export default function SearchBar() {
    return (
        <div className="search-box">
            <div id='search-bar-by-id' className='search-bars'>
                <Stack
                    spacing={2}
                    sx={{
                        width: 200,
                        height: 50
                    }}
                >
                    <Autocomplete
                        freeSolo
                        id="free-solo-2-demo"
                        disableClearable
                        options={ids.map((option) => option)}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                fullWidth
                                size="small"
                                variant="standard"
                                label="Buscar por ID"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                InputProps={{
                                    ...params.InputProps,
                                    type: 'search',
                                }}
                            />
                        )}
                    />
                </Stack>
            </div>
            <div id='search-bar-by-initials' className='search-bars'>
                <Stack
                    spacing={2}
                    sx={{
                        width: 200,
                        height: 50
                    }}
                >
                    <Autocomplete
                        freeSolo
                        id="free-solo-3-demo"
                        disableClearable
                        options={iniciales.map((option) => option)}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                fullWidth
                                size="small"
                                variant="standard"
                                label="Buscar por Iniciales"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                InputProps={{
                                    ...params.InputProps,
                                    type: 'search',
                                }}
                            />
                        )}
                    />
                </Stack>
            </div>
            <div id='search-bar-by-calories' className='search-bars'>
                <Stack
                    spacing={2}
                    sx={{
                        width: 200,
                        height: 50
                    }}
                >
                    <Autocomplete
                        freeSolo
                        id="free-solo-4-demo"
                        disableClearable
                        options={calorias.map((option) => option)}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                fullWidth
                                size="small"
                                variant="standard"
                                label="Buscar por Calorias"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                InputProps={{
                                    ...params.InputProps,
                                    type: 'search',
                                }}
                            />
                        )}
                    />
                </Stack>
            </div>
        </div>
    );
}