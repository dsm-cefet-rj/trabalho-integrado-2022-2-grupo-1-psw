import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function createData(nome, codigo, quantidade, cadeia, etapa) {
  return {
    nome,
    codigo,
    quantidade,
    cadeia,
    info: [
      {
        quantidade: quantidade,
        etapa: etapa,
      },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell align="left">{row.nome}</TableCell>
        <TableCell align="left">{row.codigo}</TableCell>
        <TableCell align="left">{row.quantidade}</TableCell>
        <TableCell align="left">{row.cadeia}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Mais Informações
              </Typography>
              <Table size="small" aria-label="Mais Informações">
                <TableHead>
                  <TableRow>
                    <TableCell>Quantidade</TableCell>
                    <TableCell>Etapa</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.info.map((infoRow) => (
                    <TableRow key={infoRow.quantidade}>
                      <TableCell component="th" scope="row">
                        {infoRow.quantidade}
                      </TableCell>
                      <TableCell>{infoRow.etapa}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    nome: PropTypes.string.isRequired,
    codigo: PropTypes.string.isRequired,
    quantidade: PropTypes.number.isRequired,
    cadeia: PropTypes.string.isRequired,
    etapa: PropTypes.string.isRequired,
    info: PropTypes.arrayOf(
      PropTypes.shape({
        quantidade: PropTypes.number.isRequired,
        etapa: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }).isRequired,
};

const rows = [
  createData('Blusa Rosa', 'B1010', 4, 'Blusa', 'Corte'),
  createData('Calça', 'C5124', 4, 'Calça', 'Costura'),
  createData('Bermuda', 'BE500', 4, 'Calça', 'Molde'),
  createData('Blusa Azul', 'B1020', 4, 'Blusa', 'Corte'),
];

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell align="left">Nome</TableCell>
            <TableCell align="left">Código</TableCell>
            <TableCell align="left">Quantidade</TableCell>
            <TableCell align="left">Cadeia Produtiva</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}