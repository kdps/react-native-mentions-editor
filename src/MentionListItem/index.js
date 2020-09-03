import React from "react";
import PropTypes from "prop-types";
import { Text, View, TouchableOpacity,Image } from "react-native";

// Styles
import styles from "./MentionListItemStyles";

import Avatar from "../Avatar";

export class MentionListItem extends React.PureComponent {
  static propTypes = {
    item: PropTypes.object,
    onSuggestionTap: PropTypes.func,
    editorStyles: PropTypes.object
  };

  onSuggestionTap = (user, hidePanel) => {
    this.props.onSuggestionTap(user);
  };

  render() {
    const { item: user, index, editorStyles } = this.props;
    return (
      <View>
        <TouchableOpacity
          activeOpacity={0.8}
          style={[styles.suggestionItem, editorStyles.mentionListItemWrapper]}
          onPress={() => this.onSuggestionTap(user)}
        >
          <View style={[styles.text, editorStyles.mentionListItemTextWrapper, {flexDirection:"row"}]}>

            <Image style={{width:20,height:20,borderRadius:30, marginRight:7}} source={{uri:user.profile_image}}></Image>
            <Text style={[styles.title, editorStyles.mentionListItemTitle]}>
              {user.name}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default MentionListItem;
