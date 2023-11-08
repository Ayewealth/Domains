import { Avatar, Backdrop, Badge, Button, Typography, styled } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

import avatar from '../asset/avatar2.png'
import CustomTable from './CustomTable';
import BuyDomain from './BuyDomain';
import { useDomain } from '../context/DomainContex';

const Content = () => {
    const { handleAddData, handleClose, handleOpen, open } = useDomain()

    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            right: 1,
            top: 0,
            border: `2px solid ${theme.palette.background.paper}`,
            padding: '0 4px',
        },
    }));
    return (
        <div className='content'>
            <div className='search'>
                <div className='search__card'>
                    <input type="text" placeholder='Search' />
                    <IconButton>
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                            <path d="M8.29688 14.9766C11.6106 14.9766 14.2969 12.2903 14.2969 8.97656C14.2969 5.66285 11.6106 2.97656 8.29688 2.97656C4.98317 2.97656 2.29688 5.66285 2.29688 8.97656C2.29688 12.2903 4.98317 14.9766 8.29688 14.9766Z" stroke="#757575" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M15.7977 16.4773L12.5352 13.2148" stroke="#757575" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </IconButton>
                    <IconButton>
                        <StyledBadge badgeContent={4} color="error" size="small">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                                <path d="M13.5 6.72656C13.5 5.53309 13.0259 4.3885 12.182 3.54458C11.3381 2.70067 10.1935 2.22656 9 2.22656C7.80653 2.22656 6.66193 2.70067 5.81802 3.54458C4.97411 4.3885 4.5 5.53309 4.5 6.72656C4.5 11.9766 2.25 13.4766 2.25 13.4766H15.75C15.75 13.4766 13.5 11.9766 13.5 6.72656Z" stroke="#757575" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M10.2981 16.4766C10.1663 16.7039 9.97701 16.8926 9.74929 17.0237C9.52158 17.1549 9.26341 17.2239 9.00062 17.2239C8.73784 17.2239 8.47967 17.1549 8.25196 17.0237C8.02424 16.8926 7.83498 16.7039 7.70312 16.4766" stroke="#757575" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </StyledBadge>
                    </IconButton>
                    <IconButton>
                        <Avatar src={avatar} sx={{ width: 30, height: 30 }} />
                    </IconButton>
                </div>
            </div>
            <div className='head'>
                <Typography variant='p' sx={{ fontSize: 16, color: "#8D8D8D" }}>Dashboard/domains</Typography>
                <Typography variant='h3' sx={{ fontWeight: 600, color: "#343434" }}>Domains</Typography>
            </div>
            <div className='content__table'>
                <div className='content__buy'>
                    <Button onClick={handleOpen}>
                        <AddOutlinedIcon />
                        Buy Domain
                    </Button>
                </div>
                <CustomTable />
                <Backdrop
                    open={open}
                >
                    <BuyDomain onAddData={handleAddData} handleClose={handleClose} />
                </Backdrop>
            </div>
        </div >
    )
}

export default Content