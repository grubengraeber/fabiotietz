import React from 'react'
import TechnologySkillBase from './technology-skill-base'
import TechnologySkill from '../data/TechnologySkill'

function MobileSkills() {
    const mobileTechnologies: TechnologySkill[] = [
        new TechnologySkill(
            "Dart",
            80,
            "https://dart.dev/",
            "https://media.licdn.com/dms/image/D5612AQH9LqQIHNjbmg/article-cover_image-shrink_600_2000/0/1695541044573?e=2147483647&v=beta&t=Mx7rTYFiidokfxmw3W7Xo3UNANFfEk3l1WDx-wlls9U",
            "/tools/dart"
        ),
        new TechnologySkill(
            "Flutter",
            40,
            "https://flutter.dev/",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Google-flutter-logo.svg/2560px-Google-flutter-logo.svg.png",
            "/tools/flutter"
        ),
        new TechnologySkill(
            "Swift",
            20,
            "https://developer.apple.com/xcode/swiftui/",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTytBAPExtXR2U_6KaDmU8SIpbh6n2nFRvo9w&s",
            "/tools/swift"
        ),
        new TechnologySkill(
            "React Native",
            15,
            "https://reactnative.dev/",
            "https://devtop.io/wp-content/uploads/2022/10/react-native-1.png",
            "/tools/react-native"
        ),
    ]

  return (
    <div>
        {/* <SkillSubBase items={mobileTechnologies} title='Mobile Technologies' /> */}
        <TechnologySkillBase items={mobileTechnologies} label='Mobile Technologies' />
    </div>
  )
}

export default MobileSkills
