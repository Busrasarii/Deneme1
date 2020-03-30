import React, { useState } from 'react'

function LoginPage(props) {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');


    function Kontrol() {
        if (password === 123) { console.log('GELDİ') } else { }



    }
    function handleSubmit(event) {
        event.preventDefault();


        if (name === 'Abc') {
            if (password === 'Test123*') console.log('Kullanıcı adı ve Şifre Doğru')
        } else { console.log('Kullanıcı adı doğru Şifre Yanlış') }

    }
    if (name != 'Abc') {
        if (password === 'Test123*') { console.log('Kullanıcı adı yanlış Şifre Doğru') } else { console.log(' Kullanıcı adı ve Şifre Yanlış') }

    }


    function validateForm() {
        return name.length > 0 && password.length > 0;
    }




    return (
        <div>
            <form onSubmit={handleSubmit}>


                <label>Please Enter Name</label>
                <br></br>
                <input type="text" value={name} onChange={e => setName(e.target.value)}></input>



                <br></br>
                <br></br>
                <label>Please Enter Password</label>
                <br></br>

                <input type="password" value={password} onChange={e => setPassword(e.target.value)}></input>
                <br></br>
                <br></br>
                <button disabled={!validateForm()} type="submit">GÖNDER</button>



            </form>

        </div>
    )

}
export default LoginPage;

// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';

// const useStyles = makeStyles({
//   table: {
//     minWidth: 650,
//   },
// });

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

// export default function SimpleTable() {
//   const classes = useStyles();

//   return (
//     <TableContainer component={Paper}>
//       <Table className={classes.table} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell>Dessert (100g serving)</TableCell>
//             <TableCell align="right">Calories</TableCell>
//             <TableCell align="right">Fat&nbsp;(g)</TableCell>
//             <TableCell align="right">Carbs&nbsp;(g)</TableCell>
//             <TableCell align="right">Protein&nbsp;(g)</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map(row => (
//             <TableRow key={row.name}>
//               <TableCell component="th" scope="row">
//                 {row.name}
//               </TableCell>
//               <TableCell align="right">{row.calories}</TableCell>
//               <TableCell align="right">{row.fat}</TableCell>
//               <TableCell align="right">{row.carbs}</TableCell>
//               <TableCell align="right">{row.protein}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }
