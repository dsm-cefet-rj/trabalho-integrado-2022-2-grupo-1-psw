function Forms(){
    return( 
    <form>
        <div class="form-group col-md">
            <label for="apelido">Apelido</label>
            <input type="string" class="form-control" id="apelido" placeholder="Digite o apelido do produto"/>
        </div>
        <div class="form-group">
            <label for="codigo">Código</label>
            <input type="string" class="form-control" id="codigo" placeholder="Digite o código do produto"/>
        </div>
        <div class="form-group">
            <label for="quantidade">Quantidade</label>
            <input type="number" class="form-control" id="quantidade" placeholder="Digite a quantidade do produto"/>
        </div>
        <div class="form-group">
            <label for="cadeia">Cadeia Produtiva</label>
            <input type="string" class="form-control" id="cadeia" placeholder="Digite a cadeia produtiva do produto"/>
        </div>
        <div class="form-group">
            <label for="etapa">Etapa Produtiva</label>
            <input type="string" class="form-control" id="etapa" placeholder="Digite a etapa do produto"/>
        </div>
        <button type="button" href="Produtos" class="btn btn-danger">Cancelar</button>
        <button type="submit" class="btn btn-primary">Confirmar</button>
        </form>    
    )
}
export default Forms