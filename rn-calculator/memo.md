# 프로젝트를 통해 배운점

### 1. 컴포넌트 역할

<hr/>

#### (1). View 컴포넌트

View 컴포넌트는 주로 레이아웃을 담당하는 데 사용되는 컴포넌트.
<br/>div 요소와 비슷한 역할을 한다.

<br/>

#### (2). Text 컴포넌트
텍스트를 앱 화면에 보여주는 데 사용되는 컴포넌트

<br/>

#### (3). StatusBar 컴포넌트
앱 상단의 상태 바를 설정하는 데 사용되는 컴포넌트

<br/>

#### (4). Touchable ... 컴포넌트
Touchable로 시작하는 컴포넌트를 사용하면, 커스텀 버튼을 만들 수 있다.
<br/>
안드로이드, iOS에 스타일이 동일한 버튼을 만들 수 있다.
<br/>
(Button 컴포넌트 같은 경우, 안드로이드, iOS에서 기본 스타일이 다르다.)

<br/>

#### (5). Pressable 컴포넌트
Touchable로 시작하는 컴포넌트와 비슷한 역할을 수행한다. <br/>
Pressable 컴포넌트는 style prop에 함수를 할당할 수도 있는데, 해당 함수는 pressed 프로퍼티를 가진 객체를 매개변수로 받을 수 있다. -> 이를 통해서 버튼이 눌렸을 때의 스타일을 할 수 있다.
<br/>
(참고: style prop의 타입: View Style or ({ pressed: boolean }) => View Style)

<br/>

### 2. 스타일링 (StyleSheet 사용하는 경우)
<hr/>

- px, em 등의 단위를 사용하지 않는다.
- 프로퍼티 명은 카멜 케이스(camelCase) 로 작성한다.
- 프로퍼티 값의 타입이 다를 수 있다.<br/>예를 들어, fontWeight <- string 타입의 값 할당해야 함.
- 하나의 컴포넌트에 여러 개의 스타일을 적용할 때는, style prop에 요소가 스타일 객체인 배열을 전달하면 된다. (단, 순서에 주의해야 한다.)

<br/>

### 3. 이벤트
<hr/>

#### (1). press 관련 이벤트

- onPressIn: 터치가 되었을 때 호출된다. <- 손으로 누른 순간
- onPressOut: 터치가 해제되었을 때 호출된다. <- 버튼에서 손 뗀 순가
- onPress: 터치가 해제된 이후 호출된다.
- onLongPress: 일정 시간 동안 누르고 있으면 호출된다.

호출순서는 다음과 같다. (버튼을 누른 경우,)<br/>
onPressIn -> onPressOut -> onPress