document.getElementById('institution').addEventListener('click', function () {
      showLoginForm('institutionform');
    });

    document.getElementById('practitioner').addEventListener('click', function () {
      showLoginForm('practitionerForm');
    });

    document.getElementById('patient').addEventListener('click', function () {
      showLoginForm('patientForm');
    });

    function showLoginForm(formId) {
      document.getElementById('institutionform').style.display = 'none';
      document.getElementById('practitionerForm').style.display = 'none';
      document.getElementById('patientForm').style.display = 'none';

      document.getElementById(formId).style.display = 'block';
    }