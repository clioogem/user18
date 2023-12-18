document.addEventListener('DOMContentLoaded', function() {
      document.getElementById('institution').addEventListener('click', function () {
        showRegistrationForm('institutionform');
      });

      document.getElementById('practitioner').addEventListener('click', function () {
        showRegistrationForm('practitionerform');
      });

      document.getElementById('patient').addEventListener('click', function () {
        showRegistrationForm('patientform');
      });

      function showRegistrationForm(formId) {
        document.getElementById('institutionform').style.display = 'none';
        document.getElementById('practitionerform').style.display = 'none';
        document.getElementById('patientform').style.display = 'none';

        document.getElementById(formId).style.display = 'block';
      }
    });

function submitReg() {
            alert('Registration successful! Please check your email.');
        }