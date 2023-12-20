import { Avatar, Box, Button, Fab, Modal, Stack, TextField, Tooltip, Typography } from '@mui/material';
import styled from '@emotion/styled';
import React, { useState } from 'react';
import {Add as AddIcon, EmojiEmotions, PersonAdd, VideoCameraBack } from '@mui/icons-material';

const StyledModal = styled(Modal)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
})

const UserBox = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: "10px",
    marginBottom: "20px"
})

function AddPost() {
    const [open, setOpen] = useState(false);

    const openDialog = () => {
        setOpen(true);
    }

    return (
        <>
            <Tooltip onClick={openDialog} title="Add" sx={{position: "fixed", bottom: 20, left:{xs: "calc(50% - 25px)", md: 30}}}>
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Tooltip>
            <Button>Open modal</Button>
            <StyledModal
            open={open}
            onClose={(e) => setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
                <Box width={400} height={250} p={3} bgcolor={"background.default"} color={"text.primary"} borderRadius={4}>
                    <Typography variant='h6' color={'gray'} textAlign={'center'}>Create Post</Typography>
                    <UserBox>
                        <Avatar sx={{width:30, height:30, cursor: "pointer"}} src='https://th.bing.com/th/id/OIP.audMX4ZGbvT2_GJTx2c4GgHaHw?rs=1&pid=ImgDetMain'></Avatar>
                        <Typography fontWeight={500} variant="span">Puneeth</Typography>
                    </UserBox>
                    <TextField
                        sx={{width: '100%'}}
                        id="standard-multiline-static"
                        multiline
                        rows={3}
                        placeholder="What's in your mind?"
                        variant="standard"
                    />
                    <Stack direction={'row'} gap={1} mt={2} mb={3}>
                        <EmojiEmotions color="primary" />
                        <VideoCameraBack color="success" />
                        <PersonAdd color="error" />
                    </Stack>
                    <Button variant='contained' sx={{width: '40%'}}>Post</Button>
                </Box>
            </StyledModal>
        </>
    )
}

export default AddPost
