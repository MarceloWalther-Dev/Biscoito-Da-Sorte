import React, { Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

class App extends Component {

  constructor(props) {
    super(props);


    // STATE
    this.state = {
      textoFrase: '',
      img: require('./src/img/biscoito.png'),

    };

    //BIND

    this.cookieOpen = this.cookieOpen.bind(this);

    // VARIABLES
    this.frases = [
      '"Não ganhe o mundo e perca sua alma; sabedoria é melhor que prata e ouro."',
      '"Se você agir sempre com dignidade, pode não melhorar o mundo, mas uma coisa é certa: haverá na Terra um canalha a menos."',
      '"Todo mundo é capaz de dominar uma dor, exceto quem a sente."',
      '"Choramos ao nascer porque chegamos a este imenso cenário de dementes."',
      '"Viver é a coisa mais rara do mundo. A maioria das pessoas apenas existe."',
      '"O mundo é um lugar perigoso de se viver, não por causa daqueles que fazem o mal, mas sim por causa daqueles que observam e deixam o mal acontecer."',
      '"Não existe nada de completamente errado no mundo, mesmo um relógio parado consegue estar certo duas vezes por dia."',
      '"O mundo não está ameaçado pelas pessoas más, e sim por aquelas que permitem a maldade."',
      '"Tente mover o mundo – o primeiro passo será mover a si mesmo."',
      '"Tenho pensamentos que, se pudesse revelá-los e fazê-los viver, acrescentariam nova luminosidade às estrelas, nova beleza ao mundo e maior amor ao coração dos homens."',
      '"Somos o que pensamos. Tudo o que somos surge com nossos pensamentos. Com nossos pensamentos, fazemos o nosso mundo."',
      '"A imaginação é mais importante que a ciência, porque a ciência é limitada, ao passo que a imaginação abrange o mundo inteiro."',
      '"Se soubéssemos quantas e quantas vezes as nossas palavras são mal interpretadas, haveria muito mais silêncio neste mundo."',
      '"Todas as grandezas do mundo não valem um bom amigo."'
    ];
  }

  cookieOpen(){
    let numberRandom = Math.floor(Math.random() * this.frases.length);

    this.setState({
      
      textFrase: this.frases[numberRandom],
      img: require('./src/img/biscoitoAberto.png')
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          
          style = {styles.img}
          source = {this.state.img}
        />
        <Text style={styles.textFrase}>  {this.state.textFrase} </Text>
        <TouchableOpacity style={styles.btn} onPress = {this.cookieOpen}>
          <View style={styles.viewText}>
            <Text style ={styles.textBtn} > Quebrar Biscoito</Text>
          </View>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    padding: 20,
    backgroundColor: 'black'
  },
  img:{
    width:250,
    height:250
  },
  textFrase:{
    fontSize:20,
    color: '#dd7b22',
    margin:30,
    fontStyle:'italic',
    textAlign:"center"
  },
  btn:{
    width:230,
    height:50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius:25
  },
  viewText:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textBtn:{
    fontSize: 18,
    fontWeight:'bold',
    color: '#dd7b22'
  }

});

export default App;
