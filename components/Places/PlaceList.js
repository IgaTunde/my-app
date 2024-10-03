import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'

export default function PlaceList({places}) {
  return (
    <FlatList data={places}/>
    
  )
}

const styles = StyleSheet.create({})