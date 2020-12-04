import React, {useMemo} from 'react';
import {parseISO, formatRelative} from 'date-fns';
import pt from 'date-fns/locale/pt';
import {TouchableOpacity, Image, Linking} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Container, Left, Avatar, Info, Name, Time, ContactButton, ContactButtonText} from './styles';
import whatsappIcon from '../../assets/icons/whatsapp.png';
import format from 'date-fns/format';
import sub from 'date-fns/sub';

export default function Appointment({data, onCancel}) {
  // const dateParsed = useMemo(() => {
  //   return formatRelative(parseISO(data.date), new Date(), {
  //     locale: pt,
  //     addSuffix: true,
  //   });
  // }, [data.date]);

  const dateParsed = `Dia ${format(parseISO(data.date), 'dd/MM/yyyy')} às ${format(sub(parseISO(data.date), {hours: 3}), 'HH:mm', { locale: pt })}`;

  function handleLinkToWhatsapp() {
    // api.post('connections', {
    //   user_id: teacher.id,
    // });

    Linking.openURL(`whatsapp://send?phone=${data.provider.whatsapp}`);
  }

console.log('data=>', data.provider)
  return (
    <Container past={data.past}>
      <Left>
        <Avatar
          source={{
            uri: data.provider.avatar
              ? data.provider.avatar.url
              : `https://api.adorable.io/avatars/50/${data.provider.name}.png`,
          }}
        />

        <Info>
          <Name>{data.provider.name}</Name>
          <Time>{dateParsed}</Time>
         <ContactButton  onPress={handleLinkToWhatsapp}>
            <Image source={whatsappIcon} />
            <ContactButtonText>Entrar em contato</ContactButtonText>
          </ContactButton>
        </Info>

      </Left>

      {data.cancelable && !data.canceled_at && (
        <TouchableOpacity onPress={onCancel}>
          <Icon name="event-busy" size={20} color="#f64c75" />
        </TouchableOpacity>
      )}
    </Container>
  );
}
