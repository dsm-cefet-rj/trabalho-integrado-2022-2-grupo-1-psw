function Table(){
   return (
    <table class="table table-striped table-hover table-bordered">
        <thead class="thead-dark">
            <tr>
            <th scope="col">Apelido</th>
            <th scope="col">Código</th>
            <th scope="col">Quantidade</th>
            <th scope="col">Cadeia Produtiva</th>
            <th scope="col">Etapa</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th scope="row">Blusa Azul</th>
            <td>3222</td>
            <td>3</td>
            <td>Blusa</td>
            <td>Corte</td>
            </tr>
            <tr>
            <th scope="row">Calça Jeans</th>
            <td>5677</td>
            <td>8</td>
            <td>Roupa de Baixo</td>
            <td>Corte</td>
            </tr>
            <tr>
            <th scope="row">Bermuda</th>
            <td>7644</td>
            <td>7</td>
            <td>Roupa de Baixo</td>
            <td>Costura</td>
            </tr>
            <tr>
            <th scope="row">Blusa Rosa</th>
            <td>3223</td>
            <td>5</td>
            <td>Blusa</td>
            <td>Compra do Tecido</td>
            </tr>
        </tbody>
        </table>
   )
}
export default Table