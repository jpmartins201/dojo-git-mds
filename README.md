# Dojo de Git

## <b>Guia para contribuição ao projeto </b>
### Configurando o git
Para a realização deste treinamento deve-se primeiro ter o git instalado em sua máquina. Para tal, rode o comando `git --version` <br>
Após certificar a presença do git, é necessário configurar o usuário/email para efetuar as contribuições. Execute o comando trocando "John Doe" e johndoe@example.com pelo seu nome de usuário e email cadastrados no github. <br>
`$ git config --global user.name "John Doe"` <br>
`$ git config --global user.email johndoe@example.com` <br>
Atualmente o GitHub depreciou o uso de senhas criadas então será necessário que vocês configurem um token de acesso pessoal para poder subir alterações aos repositórios. Este [link](https://docs.github.com/pt/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token) possui um tutorial para isso. Depois de configurar a chave de acesso pessoal, vocês deverão utilizá-la no lugar da senha pessoal quando o git pedir a senha ao tentar um `git push` . Além disso, também é necessário que criem uma chave SSH à sua conta do github (se não houver uma). Este [link](https://docs.github.com/pt/github/authenticating-to-github/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account) possui um tutorial do github para criar e adicionar uma chave à sua conta.

### Hands-on de contribuições
Para esse treinamento, a equipe de MDS ficará responsável pela execução das tarefas abaixo, a fim de proporcionar a realização de uma prática com as mãos no código. 3 arquivos já estarão disponíveis no repositório e as tarefas envolvem alterações neles. Segue abaixo a lista de tarefas consecutivas a serem cumpridas. 
* Adicionar background no html
* Adicionar botão no html
* Criar uma branch 'A'
* Alterar a cor do background na branch 'A'
* Criar branch 'B'
* Adicionar o javascript na branch 'B'
* Criar um pull request da branch 'B' à main
* Na branch 'A', dar um rebase da main
* Criar um pull request de 'A' à main
* Criar uma branch 'C'
* Adicionar o resto do CSS na branch 'C'
* Deletar todos os arquivos na branch 'C'
* Criar uma branch 'D'
* Realizar um cherry-pick do commit do CSS na branch 'D'
* Criar um pull request da 'D' à main


