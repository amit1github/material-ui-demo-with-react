import { makeStyles } from '@mui/styles'


const useStyles = makeStyles({
    btn: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    },

    container: {
        // background: '#b5b5f8',
        // paddingBottom: '50px',
        marginTop: '40px',
    },

    icons: {
        marginRight: "05px",
    },

    cardGrid: {
        padding: "20px 0",
    },

    card: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        position: "relative"
    },

    cardMedia: {
        paddingTop: "56.25%" //16:9
    },

    cardContent: {
        flexGrow: 1,
    },

    footer: {
        backgroundColor: "blue" ,
        padding: "50px 0",
    },
})

export default useStyles