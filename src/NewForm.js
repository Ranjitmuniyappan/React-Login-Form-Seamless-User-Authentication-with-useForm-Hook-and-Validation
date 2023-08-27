import React, { useEffect, useRef } from 'react';
import { useForm , Controller} from 'react-hook-form';

const YourComponent = () => {
  
  const { register, handleSubmit, setValue, getValues, watch } = useForm();
  const textFieldRefs = useRef({});

  // Function to register a TextField's ref with a unique name
  const registerTextFieldRef = (name, ref) => {
    textFieldRefs.current[name] = ref;
  };

  // Function to update API values and set focus to all TextFields
  const updateAPIValuesAndSetFocus = async (data) => {
    // Simulate API call
    const updatedAPIValues = {
      firstName: 'John',
      lastName: 'Doe',
      contactNumber: '1234567890',
      city: 'New York',
    };

    // Update form values with API data
    setValue('firstName', updatedAPIValues.firstName);
    setValue('lastName', updatedAPIValues.lastName);
    setValue('contactNumber', updatedAPIValues.contactNumber);
    setValue('city', updatedAPIValues.city);

    // Set focus to all TextFields
    Object.values(textFieldRefs.current).forEach((ref) => {
      if (ref && ref.focus) {
        ref.focus();
      }
    });
  };

  // Handle form submission
  const onSubmit = (data) => {
    // Your form submission logic here...
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        ref={(e) => {
          registerTextFieldRef('firstName', e);
          register(e); // Register the ref with react-hook-form
        }}
      />

      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        ref={(e) => {
          registerTextFieldRef('lastName', e);
          register(e); // Register the ref with react-hook-form
        }}
      />

      <input
        type="text"
        name="contactNumber"
        placeholder="Contact Number"
        ref={(e) => {
          registerTextFieldRef('contactNumber', e);
          register(e); // Register the ref with react-hook-form
        }}
      />

      <input
        type="text"
        name="city"
        placeholder="City"
        ref={(e) => {
          registerTextFieldRef('city', e);
          register(e); // Register the ref with react-hook-form
        }}
      />

      <button type="button" onClick={updateAPIValuesAndSetFocus}>
        Update API Values and Set Focus
      </button>
    </form>
  );
};

export default YourComponent;
