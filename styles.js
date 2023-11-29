import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  board: {
    width: 840,
    height: 700,
    paddingVertical: 20,
    paddingHorizontal: 0,
    marginHorizontal: 'auto',
    borderLeftWidth: 50,
    borderRightWidth: 50,
    borderLeftColor: 'blue',
    borderRightColor: 'blue',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'flex-start',
    gap: 20,
    backgroundColor: 'yellow',
  },
  slot: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
    fontSize: 100,
    fontFamily: 'sans-serif',
  },
  h1: {
    textAlign: 'center',
    fontFamily: 'sans-serif',
    fontSize: 40,
  },
  slotImg: {
    transition: '1s',
  },
  playerDisplay: {
    fontFamily: 'sans-serif',
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 50,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default styles;
