Notification.requestPermission().then(function(result) {
  if (result === 'denied') {
    alert('Vous ne receverez pas de notification')
    } else {
      alert('Merci d\'accepter les notifications')
    }
  console.log(result);
});